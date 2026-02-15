// Generate a grid generator
// Set the grid size

// If I just wrap the divs, then make it so that
// the flex is set based on gridSize
// all is peachy

let gridSize = 16;

const gridContainer = document.querySelector("#grid-container");

function generateGrid (gridSize){

    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
            const tile = document.createElement("div");
            tile.className = "tile";
            gridContainer.appendChild(tile);

            let gridWidth = 100 / gridSize;
            tile.style.flex = `1 1 ${gridWidth}%`;
        }
    }
}

generateGrid(gridSize);

