

const button = document.querySelector("button");
button.addEventListener("click", requestCanvasSize);
let canvasSize;
function requestCanvasSize() {
    canvasWidth = +prompt("Enter a number from 1-100 to set the canvas pixel width:");
    setCanvasSize();
    // need to dynamically change canvas size by using value
    // from requested canvas size to run setCanvasSize().
}

const canvas = document.querySelector(".canvas");
function setCanvasSize() {
    canvas.textContent = "";
    for (let i = 0; i < Math.pow(canvasWidth, 2); i++) {
        const canvasPixel = document.createElement('div');
        canvasPixel.classList.add("canvas-pixel");
        canvasPixel.addEventListener("mouseover", setPixelColor);
        canvas.appendChild(canvasPixel);
    };
}


function setPixelColor() {
    this.setAttribute("style", "background-color: black");
}


