function tokenUpdate(data) {
  canvas.tokens.controlled.map(token => token.update(data));
}

let dialogEditor = new Dialog({
  title: `Visão do Token`,
  content: `Escolha a visão do token selecionado.`,
  buttons: {
    nenhuma: {
      label: `Nenhuma`,
      callback: () => {
        tokenUpdate({"vision": true, "dimSight": 0, "brightSight": 0});
        dialogEditor.render(true);
      }
    },
    penumbra: {
      label: `Penumbra`,
      callback: () => {
        tokenUpdate({"vision": true, "dimSight": 0, "brightSight": 9});
        dialogEditor.render(true);
      }
    },
    escuro: {
      label: `Escuro`,
      callback: () => {
        tokenUpdate({"vision": true, "dimSight": 0, "brightSight": 18});
        dialogEditor.render(true);
      }
    },
    trevas: {
      label: `Trevas`,
      callback: () => {
        tokenUpdate({"vision": true, "dimSight": 0, "brightSight": 100});
        dialogEditor.render(true);
      }
    },
    close: {
      icon: "<i class='fas fa-tick'></i>",
      label: `Fechar`
    },
  },
  default: "close",
  close: () => {}
});

dialogEditor.render(true)
