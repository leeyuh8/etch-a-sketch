let selectedColorMode;
let canvasItemsNodeList;

const colorModes = document.querySelectorAll('.modes');
colorModes.forEach((mode) => 
    mode.addEventListener('click', (e) => selectedColorMode = `${e.target.value}`)
);


// CANVAS SIZE
const canvasPromptButton = document.querySelector('.prompt-canvas-size');
canvasPromptButton.addEventListener('click', getCanvasRowLength);
function getCanvasRowLength() {
    let canvasRowLength= prompt('Enter a number from 1-100 to set the canvas size:');
    createCanvasItems(canvasRowLength);
};


const canvasContainer = document.querySelector('.canvas-container');
function createCanvasItems(canvasRowLength) {
    if (!canvasRowLength) {
        canvasRowLength = '16';
    }

    canvasContainer.textContent = '';
    for (let i = 0; i < Math.pow(canvasRowLength, 2); i++) {
        let canvasItem = document.createElement('div');
        canvasItem.classList.add('canvas-item');
        canvasItem.style.backgroundColor = 'rgb(255, 255, 255)';
        canvasItem.style.width = `${500/canvasRowLength}px`;
        canvasItem.style.height = `${500/canvasRowLength}px`;
        canvasContainer.appendChild(canvasItem);
    }

    // to all items created, add mouseover event listener to run
    // selected or default color mode.
    canvasItemsNodeList = document.querySelectorAll('.canvas-item');
    canvasItemsNodeList.forEach((item) => 
        item.addEventListener('mouseover', (e) => {
            if (selectedColorMode === 'Pencil') {
                drawPencil(e);
            } else if (selectedColorMode === 'Rainbow') {
                drawRainbow(e);
            } else if (selectedColorMode === 'Shading') {
                drawShading(e);
            } else {
                drawPencil(e);
            }
        })
    );
};
createCanvasItems();

// CANVAS SETTINGS
const buttonClear = document.querySelector("button.clear-canvas");
buttonClear.addEventListener("click", clearCanvas);
function clearCanvas() {
    let items = document.querySelectorAll(".canvas-container > *");
    items.forEach((item) => {
        item.style.backgroundColor = "rgb(255, 255, 255)";
        item.style.opacity = '1';
    });

}


// COLOR MODE
function drawPencil(e) {
    e.target.style.backgroundColor = 'rgba(0, 0, 0, 1)';   // black
};

function drawRainbow(e) {
    let r = Math.floor((Math.random() * 256));
    let g = Math.floor((Math.random() * 256));
    let b = Math.floor((Math.random() * 256));
    e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`; //random color
};

function drawShading(e) {
    if (e.target.style.opacity === '') {
        e.target.style.opacity = 0.9;
    } else {
        e.target.style.opacity -= 0.1;
    }
};






