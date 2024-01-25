let currentMoleTile;
let score = 0;
let moleInterval;

window.onload = function () {
    setGame();
}

function setGame() {
    createBoard();

    moleInterval = setInterval(setMole, 1000);
}

function createBoard() {
    const board = document.getElementById("board");

    for (let i = 0; i < 12; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", whackMole);
        board.appendChild(tile);
    }
}

function setMole() {
    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./assets/monty.png";
    mole.alt = "Mole";
    mole.style.width = "80px";
    mole.style.height = "80px";

    let num = getRandomTile();
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function getRandomTile() {
    return Math.floor(Math.random() * 12).toString();
}

function whackMole() {
    if (this == currentMoleTile) {
        score += 10;
        document.getElementById("score").innerText = "Score: " + score;
    }
}

// Add game over logic if needed
// function gameOver() {
//     clearInterval(moleInterval);
//     alert("Game Over! Your final score is: " + score);
// }
