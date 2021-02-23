// Macro desenvolvida por Sapodinho#0859 inspirado no exemplo de BrunoCF086#7267.
// Teste de Morte do Tormenta20;
(() => {
  if (!token) {
    ui.notifications.warn("Nenhum personagem selecionado!");
    return;
  }
  if (token.actor.data.data.attributes.pv.value > 0) {
    ui.notifications.warn(`${token.actor.name} tem mais do que 0 PV!`);
    return;
  }
  // Criando a variável com o resultado do Teste de CON do personagem.
  const roll = new Roll("1d20").roll();

  // Criando a variável com o mínimo de HP.
  let tokenHpMin = Math.floor(-Math.abs(token.actor.data.data.attributes.pv.max)/2);
  if (tokenHpMin > -10) tokenHpMin = -10;

  // Criando a constante com o texto que ira para o chat, escrito em html.
  const content = 
  `
  <div class="tormenta20 chat-card item-card" data-actor-id="${token.actor.id}">
    <header class="card-header flexrow">
      <h3 class="item-name"><div>Teste de Morte</div></h3>
      <span class="custo" style="float:right">CD 15</span>
    </header>
    <div class="card-content">
   <p>Se ficar com 0 PV ou menos, você cai inconsciente e começa a sangrar. No início de seu turno, faça um teste de Constituição (CD 15). Se passar, você estabiliza e não precisa mais fazer esse teste. Se falhar, você perde [[1d6]] pontos de vida e continua sangrando. Você deve repetir o teste a cada rodada, até estabilizar ou morrer. Um personagem sangrando pode ser estabilizado com um teste de Cura (CD 15) ou com qualquer efeito que cure pelo menos 1 PV.</p>
   <p>Quando seus pontos de vida chegam a ${tokenHpMin}, você morre.</p>
    </div>
    <div class="roll">
      <div class="dice-roll">
        <div class="dice-result">
          <div class="dice-formula">1d20 + ${token.actor.data.data.atributos.con.mod}</div>
          <div class="dice-tooltip">
              <div class="dice">
                <div class="part-header flexrow">
                  <span class="part-formula">1d20</span>
                  <span class="part-total">${roll.total}</span>
                </div>
                <ol class="dice-rolls">
                  <li class="roll die d20">${roll.total}</li>
                </ol>
              </div>
          </div>
          <h4 class="dice-total">${roll.total + token.actor.data.data.atributos.con.mod}</h4>
      </div>
    </div>
  </div>
  `;
  ChatMessage.create({
    user: game.user._id,
    speaker: ChatMessage.getSpeaker({token: actor}),
    content: content
  });
})();
