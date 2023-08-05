
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
        canvasItem.style.backgroundColor = 'rgb(193, 193, 193)';
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
    
    canvasItemsNodeList.forEach((item) => {
        let originalBg = window.getComputedStyle(item).getPropertyValue('background-color');
        item.setAttribute('data-original-bg', `${originalBg}`);
        }
    )

    canvasItemsNodeList.forEach((item) => 
        item.addEventListener('mouseover', (e) => {
            let originalBg = e.target.getAttribute('data-original-bg');
            let originalBgArr = originalBg.slice(4,-1)
                            .replace(/ /g, '')
                            .split(',');
            let tenPercentOfOriginalR = 0.1 * originalBgArr[0];
            let tenPercentOfOriginalG = 0.1 * originalBgArr[1];
            let tenPercentOfOriginalB = 0.1 * originalBgArr[2];

            let currentBg = window.getComputedStyle(e.target).backgroundColor;
            let currentBgArr = currentBg.slice(4,-1)
                            .replace(/ /g, '')
                            .split(',');
            let darkenR = Math.floor(+currentBgArr[0] - tenPercentOfOriginalR);
            let darkenG = Math.floor(+currentBgArr[1] - tenPercentOfOriginalG);
            let darkenB = Math.floor(+currentBgArr[2] - tenPercentOfOriginalB);
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




