const canvas = document.querySelector("#main-canvas");
const colorPicker = document.querySelector("#input--colorpicker");
const sizePicker = document.querySelector("#input--sizepicker");
const c = canvas.getContext("2d");
let currentStrokeColor = colorPicker.value;
let currentBrushSize = sizePicker.value;
let mouseInitial = false;

// Resize Canvas

//Draw Objects

// Draw 10 pixels on click

// Change Color
changeStrokeColor = e => {
  currentStrokeColor = e;
};

// Change Size
changeLineWidth = e => {
  currentBrushSize = e;
};
// Determine if mouse is pressed
mouseIsPressed = () => {
  if (mouseInitial === false) {
    mouseInitial = true;
  } else {
    mouseInitial = false;
  }
  return;
};

drawLine = () => {
  mouseIsPressed();
  if (mouseIsPressed) {
    c.beginPath();
    c.moveTo(20, 20);
    c.lineTo(20, 100);
    c.lineTo(70, 100);
    c.strokeStyle = `${currentStrokeColor}`;
    c.lineWidth = `${currentBrushSize}`;
    c.stroke();
  }
};

canvas.onmousedown = drawLine;
canvas.onmouseup = drawLine;

console.log(canvas);
console.log(c);
