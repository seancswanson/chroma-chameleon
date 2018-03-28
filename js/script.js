// Create Canvas & Context
const canvas = document.querySelector("#main-canvas");
const c = canvas.getContext("2d");
// Settings Selectors
const tools = document.getElementsByClassName("tool");
const clearButton = document.querySelector("#input--settings__clear");
const colorPicker = document.querySelector("#input--colorpicker");
const sizePickerSlider = document.querySelector("#input--sizepickerslider");
const sizePickerNumber = document.querySelector("#input--sizepickernumber");
const canvasWidthInput = document.querySelector("#input--width");
const canvasHeightInput = document.querySelector("#input--height");
// Tool Selectors
tools.forEach(tool => {
  this.addEventListener("click", changeTool);
});
const paintBrush = document.querySelector("#li--paintbrush");
const eraserTool = document.querySelector("#li--eraser");
const paintBucket = document.querySelector("#li--paintBucket");
const textTool = document.querySelector("#li--text");
const square = document.querySelector("#li--square");
const circle = document.querySelector("#li--circle");

var MMNav = {
  init: function() {
    var nav = document.getElementById("mainNav");
    nav.onclick = this.onclick;
  },
  onclick: function(e) {
    if (e.target.className == "bundle") {
      e.target.href = e.target.href + "?name=value";
    }
    return true;
  }
};

// Initial Value settings
let canvasWidth = window.innerWidth < 600 ? window.innerWidth - 100 : 600;
let canvasHeight = window.innerHeight < 550 ? window.innerHeight - 100 : 550;
let currentStrokeColor = colorPicker.value;
let currentBrushSize = sizePickerSlider.value;
let mouseInitial = false;

// Canvas & Settings Initializer
settingInit = () => {
  canvasWidthInput.value = canvasWidth;
  canvasHeightInput.value = canvasHeight;
};

canvasInit = () => {
  canvas.width = `${canvasWidth}`;
  canvas.height = `${canvasHeight}`;
  canvas.onmousedown = drawLine;
  canvas.onmouseup = drawLine;
};

// TODO Resize Canvas
setWidth = e => {
  if (e >= 1 && e <= 600) {
    canvasWidth = e;
    canvas.width = `${canvasWidth}`;
  } else {
    alert("Please enter a width between 1 & 600 pixels");
  }
};

setHeight = e => {
  if (e >= 1 && e <= 550) {
    canvasHeight = e;
    canvas.height = `${canvasHeight}`;
  } else {
    alert("Please enter a height between 1 & 550 pixels");
  }
};

// Change Color
changeStrokeColor = e => {
  currentStrokeColor = e;
};

// Change Size
changeLineWidth = e => {
  currentBrushSize = e;
  sizePickerNumber.value = e;
  sizePickerSlider.value = e;
};

// TODO Draw Objects

// TODO Draw 10 pixels on click

// Determine if mouse is pressed
mouseIsPressed = () => {
  if (mouseInitial === false) {
    mouseInitial = true;
    executeTool();
  } else {
    mouseInitial = false;
  }
  return;
};

// Draw a Line between points
drawLine = () => {
  mouseIsPressed();
  if (mouseIsPressed) {
    c.beginPath();
    c.moveTo(20, 20);
    c.lineTo(20, 100);
    c.strokeStyle = `${currentStrokeColor}`;
    c.lineWidth = `${currentBrushSize}`;
    c.stroke();
  }
};

// Clear Canvas
clearButton.addEventListener("click", function() {
  c.clearRect(0, 0, canvas.width, canvas.height);
});

executeTool = () => {
  console.log("Tool is active");
};

appInit = () => {
  canvasInit();
  settingInit();
};

appInit();
