

const button = document.querySelector("button");
button.addEventListener("click", requestCanvasSize);
let canvasPixelWidth;
function requestCanvasSize() {
    canvasWidth = +prompt("Enter a number from 1-100 to set the canvas pixel width:");
    canvasPixelWidth = 500 / canvasWidth;
    setCanvasSize();
}

const canvas = document.querySelector(".canvas");
function setCanvasSize() {
    canvas.textContent = "";
    for (let i = 0; i < Math.pow(canvasWidth, 2); i++) {
        const canvasPixel = document.createElement('div');
        canvasPixel.classList.add("canvas-pixel");
        canvasPixel.setAttribute("style", `width:${canvasPixelWidth}px; height:${canvasPixelWidth}px;`);
        canvasPixel.addEventListener("mouseover", setPixelColor);
        canvas.appendChild(canvasPixel);
    };
    // - for canvas widths smaller than 16, dynamically make the 
    // pixels larger. and vise versa.
}

function setPixelColor () {
    this.style.backgroundColor = "black";
}


