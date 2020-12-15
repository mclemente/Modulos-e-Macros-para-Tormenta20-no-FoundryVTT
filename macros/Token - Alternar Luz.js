//Fonte original: https://github.com/foundry-vtt-community/macros/blob/master/token/light_picker.js

function tokenUpdate(data) {
  canvas.tokens.controlled.map(token => token.update(data));
}

const colorFire = "#f8c377";
const colorWhite = "#ffffff";
const colorMoonGlow = "#f4f1c9";

let lightAlpha = 0.15;
let lightAnimation = {"type" : "none", "speed": 1, "intensity": 1};
let torchAnimation = {"type": "torch", "speed": 2, "intensity": 2};

let dialogEditor = new Dialog({
  title: `Luz do Token`,
  content: `Escolha uma fonte de luz que o token selecionado está segurando.`,
  buttons: {
    none: {
      label: `Nenhuma`,
      callback: () => {
        tokenUpdate({"dimLight": null, "brightLight": null, "lightAngle": 360, "lightAlpha":lightAlpha, "lightAnimation": lightAnimation});
        dialogEditor.render(true);
      }
    },
    torch: {
      label: `Tocha`,
      callback: () => {
        tokenUpdate({"dimLight": 0, "brightLight": 6, "lightAngle": 360, "lightColor": colorFire, "lightAlpha": lightAlpha, "lightAnimation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    light: {
      label: `Luz (magia)`,
      callback: () => {
        tokenUpdate({"dimLight": 0, "brightLight": 6, "lightAngle": 360, "lightColor": colorWhite, "lightAlpha": lightAlpha, "lightAnimation": lightAnimation});
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
