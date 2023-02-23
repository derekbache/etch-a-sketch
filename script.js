const container = document.querySelector(".container");
let gridSize = 16;

for (i = 0; i < gridSize; i++) {
  const gridSquareDown = document.createElement("div");
  gridSquareDown.className = "down";
  gridSquareDown.textContent = "test";
  container.appendChild(gridSquareDown);
}

const gridSquareDownNodeList = document.querySelectorAll("div.down");
console.log(gridSquareDownNodeList);

for (i = 0; i < gridSize - 1; i++) {
  for (const square of gridSquareDownNodeList) {
    const gridSquareRight = document.createElement("div");
    gridSquareRight.className = "across";
    gridSquareRight.textContent = "test";
    square.appendChild(gridSquareRight);
  }
}
