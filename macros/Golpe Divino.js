//Adicione o nome da arma exatamente como aparece no inventário.
const ARMA = "NOME DA ARMA";
(() => {
  function rollDie(html) {
    const buff = html[0].querySelector('input:checked')?.value;
    let atq = "0"
    let dano = ""
    let custo = "0"
    if (buff == "golpeDivino") {
      const golpeDivino = html[0].querySelector('input[name="golpeDivino"')?.value;
      token.actor.unsetFlag('world', 'golpeDivino')
        .then(entity => entity.setFlag('world', 'golpeDivino', golpeDivino));
            atq = "+@car"
            dano = (golpeDivino - 1) + "d8";
            custo = golpeDivino;
    }
    game.tormenta20.rollItemMacro(ARMA,{
            'atq' : atq,
            'dano' : dano, 
            'custo' : custo,
    });
  }
  
  function createForm(golpeDivino) {
    return `
    <div class="flexrow"><label>Golpe Divino (PM):</label> <input type="number" name="golpeDivino" value="${golpeDivino}" min="2" max="6" /></div>
    </input><table><thead><tr><td></td><td>Ataque</td></tr></thead>
    <tr>
      <td><input type="radio" name="item" value="golpeDivino" /></td>
      <td>Golpe Divino (2 PM)</td>
    </td>
    <tr>
      <td><input type="radio" name="item" value="" checked /></td>
      <td>Normal</td>
    </td>
    </table>`;
  }

  function createDialog(token) {
    const golpeDivino = token.actor.getFlag('world', 'golpeDivino') || "2";
    
    const form = createForm(golpeDivino);

    return new Dialog({
      title: ARMA,
      content: form,
      buttons: {
        yes: { label: "Rolar", callback: html => rollDie(html) }
      },
      default: (game.user.isGM ? 'no' : 'yes')
    }).render(true);
  }

    createDialog(token);
})();
