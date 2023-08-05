
// CANVAS SIZE
const canvasPromptButton = document.querySelector('.prompt-canvas-size');
canvasPromptButton.addEventListener('click', getCanvasRowLength);

function getCanvasRowLength() {
    let canvasRowLength= prompt('Enter a number from 1-100 to set the canvas size:');
    createCanvasItems(canvasRowLength);
};


const canvasContainer = document.querySelector('.canvas-container');

function createCanvasItems(canvasRowLength) {
    canvasContainer.textContent = '';
    for (let i = 0; i < Math.pow(canvasRowLength, 2); i++) {
        let canvasItem = document.createElement('div');
        canvasItem.classList.add('canvas-item');
        canvasItem.style.width = `${500/canvasRowLength}px`;
        canvasItem.style.height = `${500/canvasRowLength}px`;
        canvasContainer.appendChild(canvasItem);
    }
};


// COLOR MODE
const colorModes = document.querySelectorAll('.modes');
colorModes.forEach((mode) => 
    mode.addEventListener('click', getColorMode));

function getColorMode(e) {
    let colorMode = `${e.target.value}`;

    if (colorMode === 'Pencil') {
        drawPencil();
    } else if (colorMode === 'Rainbow') {
        drawRainbow();
    } else if (colorMode === 'Shading') {
        drawShading();
    }
};

function drawPencil() {
    const canvasItemsNodeList = document.querySelectorAll('.canvas-item');
    canvasItemsNodeList.forEach((item) => 
        item.addEventListener('mouseover', () => 
            item.style.backgroundColor = 'rgba(0 , 0, 0, 1)'   // black
        ));
};

function drawRainbow() {
    const canvasItemsNodeList = document.querySelectorAll('.canvas-item');
    canvasItemsNodeList.forEach((item) => 
        item.addEventListener('mouseover', () => {
            let r = Math.floor((Math.random() * 256));
            let g = Math.floor((Math.random() * 256));
            let b = Math.floor((Math.random() * 256));
            item.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`; //random color
        })
    );   
};

function drawShading() {
    const canvasItemsNodeList = document.querySelectorAll('.canvas-item');
    canvasItemsNodeList.forEach((item) => 
        item.addEventListener('mouseover', () =>{
            
        })    
    );


    let currentRgba = item.style.backgroundColor;
    let currentRgbaArr = rgba.slice(5,-1)
                      .replace(/ /g, '')
                      .split(',');
    let darkenAlpha = +rgbaArr[3] + .1;
    return `rgba(${rgbaArr[0]}, ${rgbaArr[1]}, ${rgbaArr[2]}, ${darkenAlpha})`
};



// CANVAS SETTINGS
const buttonClear = document.querySelector("button.clear-canvas");
buttonClear.addEventListener("click", clearCanvas);
function clearCanvas() {
    let clearPixels = document.querySelectorAll(".canvas > *");
    clearPixels.forEach((pixel) => pixel.style.backgroundColor = "rgba(0, 0, 0, 0)");
}




