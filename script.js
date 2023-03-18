const container = document.querySelector(".container");
let gridSize = 16;

drawGrid(gridSize);

function drawGrid(gridSize) {
  for (i = 0; i < gridSize; i++) {
    const flexContainer = document.createElement("div");
    flexContainer.className = "flexContainer";
    container.appendChild(flexContainer);
  }

  const flexContainerNodeList = document.querySelectorAll("div.flexContainer");

  for (i = 0; i < gridSize; i++) {
    for (const container of flexContainerNodeList) {
      const gridSquare = document.createElement("div");
      gridSquare.className = "gridSquare";
      gridSquare.style.height = 1000 / gridSize + "px";
      gridSquare.style.width = 1000 / gridSize + "px";
      container.appendChild(gridSquare);
    }
  }

  const squares = document.querySelectorAll("div.gridSquare");

  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.classList.add("hover");
    });
  });
}

function removeGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function gridSizeChange() {
  let gridSizeRequest;
  do {
    gridSizeRequest = prompt(
      "Please enter desired grid size between 0 and 101",
      "16"
    );
  } while (gridSizeRequest <= 0 || gridSizeRequest > 100);
  removeGrid();
  drawGrid(gridSizeRequest);
}
