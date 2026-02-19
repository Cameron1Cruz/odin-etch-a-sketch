const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize");

function createGrid(size) {
    container.innerHTML = "";
    const totalSquares = size * size;
    const squareSize = 960 / size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });

        container.appendChild(square);
    }
}

resizeBtn.addEventListener("click", () => {
    let size = Number(prompt("How many squares per side? (max 100)"));

    if (!Number.isInteger(size) || size < 1 || size > 100) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    createGrid(size);
})

createGrid(16);