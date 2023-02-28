const container = document.querySelector(".container");
let gridSize = 16;

for (i = 0; i < gridSize; i++) {
  const flexContainer = document.createElement("div");
  flexContainer.className = "flexContainer";
  container.appendChild(flexContainer);
}

const flexContainerNodeList = document.querySelectorAll("div.flexContainer");
console.log(flexContainerNodeList);

for (i = 0; i < gridSize; i++) {
  for (const container of flexContainerNodeList) {
    const gridSquare = document.createElement("div");
    gridSquare.className = "gridSquare";
    gridSquare.style.width = 100 / gridSize + "%";
    gridSquare.style.height = "50px";
    container.appendChild(gridSquare);
  }
}

const squares = document.querySelectorAll("div.gridSquare");

console.log(squares);
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.classList.add("hover");
  });
});
