// Converte fichas de NPCs em fichas de Loot (usando o módulo Ficha Loot T20)/
// For all currently selected tokens, changes their actor sheet to LootSheetNPC,
// deletes all non-lootable items, sets token Observer privs for players, and adds a treasure
// overlay icon to the body. Asks for confirmation because of the deletions.
//
// Built with help from a ton of people, notably: @Akaito, @honeybadger, @kekilla, and @cole

let d = new Dialog({
  title: 'Converter para corpo pilhável?',
  content: `Tem certeza?`,
  buttons: {
    no: {
      icon: '<i class="fas fa-ban"></i>',
      label: 'Cancelar'
    },
    yes: {
      icon: '<i class="fas fa-thumbs-up"></i>',
      label: 'Converter',
      callback: (html) => {
        ConvertToLootable();
      }
    },
  },
  default: 'no',
}).render(true);

async function ConvertToLootable(){
  for (let token of canvas.tokens.controlled) {
  
    // Não executar em PJs por engano
    if (token.actor.data.type === 'character')
      continue;
    
    // Remover itens que não deveriam ser pilháveis
    let newItems = token.actor.data.items
      .filter(item => {
        // Armas, exceto naturais
        if (item.type == 'arma') {
          return item.data.tipoUso != 'natural';
        }
        // Equipmentos, exceto naturais ou bônus mágicos
        if (item.type == 'equip') {
          return item.data.tipo != 'natural' && item.data.tipo != 'bonus';
        }
				// Tudo, exceto classe, magia ou poder
        return !(['classe', 'magia', 'poder'].includes(item.type));
      });
    await token.actor.update({
      "items": newItems
    });

    // Mudar a ficha e dar permissões para os jogadores.
    let newActorData = {
      'flags': {
          'core': {
            'sheetClass': 'tormenta20.LootSheet5eNPC'
          },
        'fichaloott20': {
          'lootsheettype': 'Loot'
        }
      }
    };
    
    let lootingUsers= game.users.entries
    // Limit selection to Players and Trusted Players
      .filter(user => {return user.role >= 1 && user.role <= 2});

    // This section is a workaround for the fact that the LootSheetNPC module
    // currently uses an older currency schema, compared to current 5e expectations.
    // Need to convert the actor's currency data to the LS schema here to avoid
    // breakage. If there is already currency on the actor, it is retained.

    if (typeof(token.actor.data.data.detalhes.dinheiro.tc) === "number") {
      let oldCurrencyData = token.actor.data.data.detalhes.dinheiro;
      newActorData['data.currency'] = {
        'tl': {'value': oldCurrencyData.tl},
        'to': {'value': oldCurrencyData.to},
        'tp': {'value': oldCurrencyData.tp},
        'tc': {'value': oldCurrencyData.tc}
      };
    }

    /* Uncomment this section if you want a set amount of gold automatically added
    
    // See if the token already has any gold
    let currencyArray = [];
    for (const currency in newActorData){
      currencyArray.push(newActorData[currency].value);
    }
    const hasGold = Math.max(...currencyArray) > 0;

    // If the actor has no gold, assign gold by CR: gold = 0.6e(0.15*CR)
    if (!hasGold){
      const exponent = 0.15 * (getProperty(token.actor, "data.data.details.cr") ?? 0);
      let gold = Math.round(0.6 * 10 * (10 ** exponent));

      // Ensure it can divide evenly across all looting players
      gold = gold + (gold % Math.max(lootingUsers.length, 1)) ?? 0;

      newActorData['data.currency'].gp.value = gold;
    }
    
    */

    await token.actor.update(newActorData);

    // Update permissions to level 2, so players can loot
    let permissions = {};
    Object.assign(permissions, token.actor.data.permission);
    lootingUsers.forEach(user => {
      permissions[user.data._id] = 2;
    });
    
    // If using Combat Utility Belt, need to remove any of its condition overlays
    // before we can add the chest icon overlay.
    if (game.modules.get("combat-utility-belt")?.active) {
      await game.cub.removeAllConditions(token);
    }
        
    await token.update({
      "overlayEffect" : 'icons/svg/chest.svg',
      "actorData": {
        "actor": {
          "flags": {
            "loot": {
              "playersPermission": 2
            }
          }
        },
        "permission": permissions
      }
    });
  }
}
