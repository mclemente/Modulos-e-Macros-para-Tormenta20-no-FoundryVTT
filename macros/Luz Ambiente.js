// Retirado do módulo de macros da comunidade do FoundryVTT https://github.com/foundry-vtt-community/macros
let macroName = "Editor Rápido de Luz Ambiente"
let macroEndLog = "---------------------------------------------"

let i=0;
let lights = canvas.lighting.objects.children;
let lightSelected = lights[0];
let selectOptions = "";
let lightSelectedAngle = 0;
let lightSelectedBright = 0;
let lightSelectedDim = 0;
let lightSelectedRotation = 0;
let lightSelectedTintAlpha = 1;
let lightSelectedTintColor = "";

console.log("---------------------------------------------");
console.log(`${macroName} by PaperPunk`);
console.log("---------------------------------------------");
console.log(`${macroName} | Start`);

const drawingDetails = {
      author: game.user._id,
      fillAlpha: 0,
      fillColor: "#808080",
      fillType: 1,
      fontFamily: "FontAwesome",
      fontSize: 24,
      height: 48,
      hidden: false,
      locked: false,
      rotation: 0,
      strokeAlpha: 1,
      strokeColor: "#000000",
      strokeWidth: 2,
      text: i,
      textAlpha: 1,
      textColor: "#ffffff",
      type: "r",
      width: 48,
      //x: 250,
      x: lightSelected.x-24,
      //y: 250
      y: lightSelected.y+25
};

//let d = Drawing.create(drawingDetails);
//d.update({"x": lights[i].x-24, "y": lights[i].y+25, "text": i});

for (i= 0; i< lights.length; i++) {
 selectOptions += `<option value="${i}">Luz Ambiente ${i}</option>`;
}

const htmlLightSelection = `
    <form>
      <h2>Selecione sua luz.</h2>
      <div class="form-group">
        <label>Luz:</label>
        <select id="light-selector" name="light-selector">
          ${selectOptions}
        </select>
      </div>
    </form>
    `;

let dialogSelector = new Dialog({
  title: `${macroName}`,
  content: htmlLightSelection,
  buttons: {
    confirm: {
      icon: "<i class='fas fa-tick'></i>",
      label: `Confirmar`,
      callback: htmlLightSelection => { 
        lightSelected = (htmlLightSelection.find('[name="light-selector"]')[0].value)
        dialogEditor.render(true);
      }
    },
    cancel: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancelar`,
      callback: () => {
        console.log(`${macroName} | Goodbye`);
        console.log(macroEndLog);
      }
    },
  },
  default: "cancel",
  //close: () => console.log("AmbientLight QuickEditor | Dialog Window Closed")
});

let dialogEditor = new Dialog({
  title: `${macroName}`,
  content: `<p>Edite sua luz.</p>`,
  buttons: {
    rot5cw: {
      icon: "<i class='fas fa-redo'></i>",
      label: `Rotacionar 5°`,
      callback: () => { 
        let rot = lights[lightSelected].data.rotation;
        lights[lightSelected].update({"rotation":rot+5});
        dialogEditor.render(true);
      }
    },
    rot15cw: {
      icon: "<i class='fas fa-redo'></i>",
      label: `Rotacionar 15°`,
      callback: () => { 
        let rot = lights[lightSelected].data.rotation;
        lights[lightSelected].update({"rotation":rot+15});
        dialogEditor.render(true);
      }
    },
    rot45cw: {
      icon: "<i class='fas fa-redo'></i>",
      label: `Rotacionar 45°`,
      callback: () => { 
        let rot = lights[lightSelected].data.rotation;
        lights[lightSelected].update({"rotation":rot+45});
        dialogEditor.render(true);
      }
    },
    rot5ccw: {
      icon: "<i class='fas fa-undo'></i>",
      label: `Rotacionar 5°`,
      callback: () => { 
        let rot = lights[lightSelected].data.rotation;
        lights[lightSelected].update({"rotation":rot-5});
        dialogEditor.render(true);
      }
    },
    rot15ccw: {
      icon: "<i class='fas fa-undo'></i>",
      label: `Rotacionar 15°`,
      callback: () => { 
        let rot = lights[lightSelected].data.rotation;
        lights[lightSelected].update({"rotation":rot-15});
        dialogEditor.render(true);
      }
    },
    rot45ccw: {
      icon: "<i class='fas fa-undo'></i>",
      label: `Rotacionar 45°`,
      callback: () => { 
        let rot = lights[lightSelected].data.rotation;
        lights[lightSelected].update({"rotation":rot-45});
        dialogEditor.render(true);
      }
    },
    brightup: {
      icon: "<i class='fas fa-circle'></i>",
      label: `Aumentar Brilhante por 3`,
      callback: () => { 
        let bright = lights[lightSelected].data.bright;
        lights[lightSelected].update({"bright":bright+3});
        dialogEditor.render(true);
      }
    },
    brightdown: {
      icon: "<i class='fas fa-circle'></i>",
      label: `Diminuir Brilhante por 3`,
      callback: () => { 
        let bright = lights[lightSelected].data.bright;
        lights[lightSelected].update({"bright":bright-3});
        dialogEditor.render(true);
      }
    },
    brightoff: {
      icon: "<i class='fas fa-circle'></i>",
      label: `Remover Luz Brilhante`,
      callback: () => { 
        lights[lightSelected].update({"bright":0});
        dialogEditor.render(true);
      }
    },
    dimup: {
      icon: "<i class='fas fa-dot-circle'></i>",
      label: `Aumentar Difusa por 3`,
      callback: () => { 
        let dim = lights[lightSelected].data.dim;
        lights[lightSelected].update({"dim":dim+3});
        dialogEditor.render(true);
      }
    },
    dimdown: {
      icon: "<i class='fas fa-dot-circle'></i>",
      label: `Dimunir Difusa por 3`,
      callback: () => { 
        let dim = lights[lightSelected].data.dim;
        lights[lightSelected].update({"dim":dim-3});
        dialogEditor.render(true);
      }
    },
    dimoff: {
      icon: "<i class='fas fa-dot-circle'></i>",
      label: `Remover Luz Difusa`,
      callback: () => { 
        lights[lightSelected].update({"dim":0});
        dialogEditor.render(true);
      }
    },
    emit15: {
      icon: "<i class='fas fa-rss'></i>",
      label: `Ângulo 15°`,
      callback: () => { 
        lights[lightSelected].update({"angle":15});
        dialogEditor.render(true);
      }
    },
    emit45: {
      icon: "<i class='fas fa-rss'></i>",
      label: `Ângulo 45°`,
      callback: () => { 
        lights[lightSelected].update({"angle":45});
        dialogEditor.render(true);
      }
    },
    emit90: {
      icon: "<i class='fas fa-rss'></i>",
      label: `Ângulo 90°`,
      callback: () => { 
        lights[lightSelected].update({"angle":90});
        dialogEditor.render(true);
      }
    },
    emit180: {
      icon: "<i class='fas fa-rss'></i>",
      label: `Ângulo 180°`,
      callback: () => { 
        lights[lightSelected].update({"angle":180});
        dialogEditor.render(true);
      }
    },
    emit270: {
      icon: "<i class='fas fa-rss'></i>",
      label: `Ângulo 270°`,
      callback: () => { 
        lights[lightSelected].update({"angle":270});
        dialogEditor.render(true);
      }
    },
    emit360: {
      icon: "<i class='fas fa-rss'></i>",
      label: `Ângulo 360°`,
      callback: () => { 
        lights[lightSelected].update({"angle":360});
        dialogEditor.render(true);
      }
    },
    back: {
      icon: "<i class='fas fa-reply'></i>",
      label: `Voltar`,
      callback: () => dialogSelector.render(true)
    },
    close: {
      icon: "<i class='fas fa-tick'></i>",
      label: `Fechar`
    },
  },
  default: "close",
  close: () => {
    console.log(`${macroName} | Goodbye`);
    console.log(macroEndLog);
  }
});

dialogSelector.render(true);
