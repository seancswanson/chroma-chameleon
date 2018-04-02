// Splash Screen
const splashScreen = document.querySelector(".div--modal");
// Create Canvas & Context
const canvas = document.querySelector("#main-canvas");
const c = canvas.getContext("2d");
// Settings Selectors
const tools = document.getElementsByClassName("tool");
const toolArray = Array.prototype.slice.call(tools);
const clearButton = document.querySelector("#input--settings__clear");
const fillPicker = document.querySelector("#input--colorpicker");
const strokePicker = document.querySelector("#input--colorpicker2");
const sizePickerSlider = document.querySelector("#input--sizepickerslider");
const sizePickerNumber = document.querySelector("#input--sizepickernumber");
const canvasWidthInput = document.querySelector("#input--width");
const canvasHeightInput = document.querySelector("#input--height");
const mouseXDisplay = document.querySelector("#p--mousex");
const mouseYDisplay = document.querySelector("#p--mousey");
// Tool Selectors
const paintBrush = document.querySelector("#li--paintbrush");
const eraserTool = document.querySelector("#li--eraser");
const paintBucket = document.querySelector("#li--paintBucket");
const textTool = document.querySelector("#li--text");
const square = document.querySelector("#li--square");
const circle = document.querySelector("#li--circle");
toolArray.forEach(tool => {
  tool.addEventListener("click", chooseTool);
});

// Initial Value settings
let canvasWidth = window.innerWidth < 600 ? window.innerWidth - 100 : 600;
let canvasHeight = window.innerHeight < 550 ? window.innerHeight - 100 : 550;
let currentFillColor = fillPicker.value;
let currentStrokeColor = strokePicker.value;
let currentBrushSize = sizePickerSlider.value;
let currentTool = "paintbrush";
let mouseInitial = false;
let mouseY;
let mouseX;

// Splash Screen
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == splashScreen) {
    splashScreen.style.display = "none";
  }
};

// App & Canvas & Settings Initializer
appInit = () => {
  canvasInit();
  settingInit();
};

splashScreenInit = () => {
  splashScreen.addEventListener("load", function(e) {
    console.log(e);
  });
};

settingInit = () => {
  canvasWidthInput.value = canvasWidth;
  canvasHeightInput.value = canvasHeight;
  sizePickerNumber.value = currentBrushSize;
  canvas.onmousedown = mouseIsPressed;
  canvas.onmouseup = mouseIsPressed;
  canvas.addEventListener("mousemove", function(e) {
    let mousePos = getMousePos(canvas, e);
    mouseXDisplay.textContent = `x: ${mouseX}`;
    mouseYDisplay.textContent = `y: ${mouseY}`;
    // console.log(`Mouse position: x = ${mouseX} y = ${mouseY}`);
  });
};

canvasInit = () => {
  canvas.width = `${canvasWidth}`;
  canvas.height = `${canvasHeight}`;
};

// Get current mouse position
let getMousePos = (canvas, e) => {
  var canvasArea = canvas.getBoundingClientRect();
  mouseX = e.clientX - canvasArea.left;
  mouseY = e.clientY - canvasArea.top;
  return mouseX, mouseY;
};

// Resize Canvas
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

changeFillColor = e => {
  currentFillColor = e;
};

// Change Size
changeLineWidth = e => {
  currentBrushSize = e;
  sizePickerNumber.value = e;
  sizePickerSlider.value = e;
};

// TODO Draw 10 pixels on click

// Determine if mouse is pressed
mouseIsPressed = () => {
  if (!mouseInitial) {
    mouseInitial = true;
    executeTool(currentTool);
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
toolArray.forEach(tool => {
  tool.addEventListener("click", chooseTool);
});
// Change current tool
function chooseTool(e) {
  toolArray.forEach(tool => (tool.style.border = ""));
  currentTool = e.toElement.id;
  this.style.border = "2px dashed black";
  console.log(`${currentTool} selected`);
}

// Use current tool
executeTool = tool => {
  if (mouseInitial) {
    // let toolType = {
    //   paintbrush: ,
    //   eraser: function() {
    //     console.log("ready canvas for erasing");
    //   },
    //   paintbucket: function() {
    //     console.log("ready canvas for fill");
    //   },
    //   text: function() {
    //     console.log("ready canvas for textbox");
    //   },
    //   square: function() {
    //     console.log("ready canvas for square");
    //   },
    //   circle: function() {
    //     console.log("ready canvas for circle");
    //   }
    // };
    switch (tool) {
      case "paintbrush":
        continuousPaintbrush;
        break;
      case "eraser":
        continuousEraser;
        break;
      case "paintbucket":
        console.log(`${tool} is working`);
        break;
      case "text":
        console.log(`${tool} is working`);
        break;
      case "sqaure":
        console.log(`${tool} is working`);
        break;
      case "circle":
        console.log(`${tool} is working`);
        break;
    }
  }
};

const drawPaintbrush = () => {
  if (mouseInitial && currentTool === "paintbrush") {
    c.beginPath();
    c.arc(mouseX, mouseY, parseInt(currentBrushSize), 0, 2 * Math.PI);
    c.fillStyle = `${currentFillColor}`;
    c.strokeStyle = `${currentStrokeColor}`;
    c.fill();
    c.stroke();
  } else {
    return;
  }
};
const drawEraser = () => {
  if (mouseInitial && currentTool === "eraser") {
    c.beginPath();
    c.arc(mouseX, mouseY, parseInt(currentBrushSize), 0, 2 * Math.PI);
    c.fillStyle = `white`;
    c.strokeStyle = `white`;
    c.fill();
    c.stroke();
  } else {
    return;
  }
};

// Draw paintbrush interval
const continuousPaintbrush = setInterval(drawPaintbrush, 0.00001);
const continuousEraser = setInterval(drawEraser, 0.00001);

const clearIntervals = () => {
  clearInterval(continuousPaintbrush);
  clearInterval(continuousEraser);
};

appInit();
