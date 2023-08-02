

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
    console.log(typeof canvasPixelWidth);
    for (let i = 0; i < Math.pow(canvasWidth, 2); i++) {
        const canvasPixel = document.createElement('div');
        canvasPixel.classList.add("canvas-pixel");
        canvasPixel.classList.add("pixel-color");
        canvasPixel.setAttribute("style", `width:${canvasPixelWidth}px; height:${canvasPixelWidth}px;`);
        canvas.appendChild(canvasPixel);
    };
    // - for canvas widths smaller than 16, dynamically make the 
    // pixels larger. and vise versa.
}



