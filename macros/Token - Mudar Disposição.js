//Fonte original: https://github.com/foundry-vtt-community/macros/blob/master/token/change_disposition.js

function tokenUpdate(data) {
  canvas.tokens.controlled.map(token => token.update(data));
}

let dialogEditor = new Dialog({
  title: `Disposição do Token`,
  content: `Escolha a disposição do token selecionado.`,
  buttons: {
    hostile: {
      label: `Hostil`,
      callback: () => {
        tokenUpdate({"disposition": -1});
        dialogEditor.render(true);
      }
    },
    friendly: {
      label: `Amigável`,
      callback: () => {
        tokenUpdate({"disposition": 1});
        dialogEditor.render(true);
      }
    },
    neutral: {
      label: `Neutro`,
      callback: () => {
        tokenUpdate({"disposition": 0});
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
