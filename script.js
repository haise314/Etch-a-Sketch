// TODO: Generate a grid generator

// If I just wrap the divs, then make it so that
// the flex is set based on gridSize
// all is peachy

let gridSize = 16;

const gridContainer = document.querySelector("#grid-container");

function generateGrid (gridSize){
    console.log("Gridsize:" + gridSize);

    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
            const tile = document.createElement("div");
            tile.className = "tile";
            gridContainer.appendChild(tile);

            let gridWidth = 100 / gridSize;
            tile.style.flex = `1 1 ${gridWidth}%`;
            console.log("j count: " + j);
        }
        console.log("i count: " + i);
    }
}

generateGrid(gridSize);

// TODO: add logic to the button then connect it

const newGridBtn = document.querySelector("#new-grid-btn");

newGridBtn.addEventListener("click", () => {
    // remove all children
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }

    gridSize = prompt("Enter new grid size.");
    generateGrid(gridSize);
})



// TODO: Add event listeners to the entire grid 
//       probably mouse events then set colors
// TODO: Have the pixel change color have trailing effect
// TODO: Randomize the trailing effect and darken the 
//       previous ones by 10% per trail 

