
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
            item.style.backgroundColor = 'rgb(0 , 0, 0)'   // black
        ));
};

function drawRainbow() {
    const canvasItemsNodeList = document.querySelectorAll('.canvas-item');
    canvasItemsNodeList.forEach((item) => 
        item.addEventListener('mouseover', () => {
            let r = Math.floor((Math.random() * 256));
            let g = Math.floor((Math.random() * 256));
            let b = Math.floor((Math.random() * 256));
            item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; //random color
        })
    );   
};

function drawShading() {
    const canvasItemsNodeList = document.querySelectorAll('.canvas-item');
    canvasItemsNodeList.forEach((item) => 
        item.addEventListener('mouseover', () =>{
            let currentRgb = item.style.backgroundColor;
            let currentRgbArr = currentRgb.slice(4,-1)
                            .replace(/ /g, '')
                            .split(',');
            let darkenR = Math.floor(+currentRgbArr[0] * 0.9);
            let darkenG = Math.floor(+currentRgbArr[1] * 0.9);
            let darkenB = Math.floor(+currentRgbArr[2] * 0.9);
            item.style.backgroundColor = `rgb(${darkenR}, ${darkenG}, ${darkenB})`;  //darkened original color
        })    
    );
};



// CANVAS SETTINGS
const buttonClear = document.querySelector("button.clear-canvas");
buttonClear.addEventListener("click", clearCanvas);
function clearCanvas() {
    let clearPixels = document.querySelectorAll(".canvas > *");
    clearPixels.forEach((pixel) => pixel.style.backgroundColor = "rgb(0, 0, 0)");
}




