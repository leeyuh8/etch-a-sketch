// CREATING THE 16x16 grid
    // - add a reference to .drawboard div
    // - create function that generates the number of squares inside that div
    //     - function contains a loop function that loops the creation 
    //     of a div 16 times

const canvas = document.querySelector(".canvas");


function setCanvasSize() {
    for (let i = 0; i < 256; i++) {
        const canvasPixel = document.createElement('div');
        canvasPixel.classList.add("canvas-pixel");
        canvasPixel.addEventListener("mouseover", setPixelColor);
        canvas.appendChild(canvasPixel);
    };
}
setCanvasSize();

function setPixelColor() {
    this.setAttribute("style", "background-color: black");
}