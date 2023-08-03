
//DEFAULT SETTINGS
let canvasRow;
const canvas = document.querySelector(".canvas");
function setDefaultCanvasSize() {
    canvasRow = 16;
    createPixels(canvasRow);
}
setDefaultCanvasSize();


// CANVAS SETTINGS
const buttonPrompt = document.querySelector("button.prompt-canvas-size");
buttonPrompt.addEventListener("click", requestCanvasSize);
function requestCanvasSize() {
    canvasRow = +prompt("Enter a number from 1-100 to set the canvas pixel width:");
    setCanvasSize(canvasRow);
}

function setCanvasSize(canvasRow) {
    if (canvasRow === 0) {
        return;
    } else {
        canvas.textContent = "";
        createPixels(canvasRow);
    }
}

function createPixels(canvasRow) {
    for (let i = 0; i < Math.pow(canvasRow, 2); i++) {
        const canvasPixel = document.createElement('div');
        canvasPixel.classList.add("canvas-pixel");
        canvasPixel.style.width = `${500/canvasRow}px`;
        canvasPixel.style.height = `${500/canvasRow}px`;
        canvasPixel.addEventListener("mouseover", drawPencil);  //selected tool
        canvas.appendChild(canvasPixel);
    };
}

const buttonClear = document.querySelector("button.clear-canvas");
buttonClear.addEventListener("click", clearCanvas);
function clearCanvas() {
    let clearPixels = document.querySelectorAll(".canvas > *");
    clearPixels.forEach((pixel) => pixel.style.backgroundColor = "rgba(0, 0, 0, 0)");
}



//TOOL SETTINGS
let toolSelection = "Pencil";
const tools = document.querySelectorAll(".tools > *");
tools.forEach((tool) => tool.addEventListener("click", getTool));
function getTool() {
    toolSelection = this.value; 
    console.log(toolSelection);
}

function drawPencil() {
    this.style.backgroundColor = "rgba(0, 0, 0, 1)"; //black
}

function drawRainbow() {
    let r = Math.floor((Math.random() * 256));
    let g = Math.floor((Math.random() * 256));
    let b = Math.floor((Math.random() * 256));
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function drawShading() {
    let rgba = this.style.backgroundColor;
    let rgbaArr = rgba.slice(5,-1)
                      .replace(/ /g, '')
                      .split(',');
    let darkenAlpha = +rgbaArr[3] + .1;
    this.style.backgroundColor = `rgba(${rgbaArr[0]}, ${rgbaArr[1]}, ${rgbaArr[2]}, ${darkenAlpha})`;
}

