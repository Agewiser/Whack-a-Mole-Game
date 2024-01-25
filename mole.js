let currentMoleTile = null;
let currentPlantTile = null;
let score = 0;
let gameOver = false;
let countdown;
let initialTime = 15; // Set your initial countdown time in seconds





function startGame () 
{
    const startGame = document.getElementById("startGame");
    startGame.addEventListener ("click", 
    
    () => alert ("Game has started. You have 15 minutes to complete this section!")
    )

    //start the game logic once the game has started!


startTimer();
setGame();

}
    setInterval(setMole, 1000); //Caling the function to run every 1 sec.
    setInterval(setPlant, 2000); //Calling the function every 2 secs.



function setGame() {
   

    //set up the grid for the game board in the html
    for (let i = 0; i < 9; i++) { //i goes from 0 -8, since its less than 9.

    let tile = document.createElement("div"); 
    tile.id = i.toString();
    document.getElementById("board").appendChild(tile);
    tile.addEventListener("click", selectTile);
    }
}

//The logic for getting a random tile in the game.

function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
        return num.toString();
    }


    //The logic for placing the mole in a random tile.

    function setMole() {

        if (currentMoleTile) {
            currentMoleTile.innerHTML = "";
        }

        let mole = document.createElement("img");
        mole.src = "./assets/monty.png"; //will create an image tag as the mole.

        //The next step is to randomly place the moles on the tiles. To do that we use a random tile suing Maths 

    let num = getRandomTile();

    if (currentPlantTile && currentPlantTile.id == num) {
        return;
    }

currentMoleTile = document.getElementById(num);
currentMoleTile.appendChild(mole);

    }
    //function to initialize the countdown timer
    function startTimer() {
        countdown = initialTime; //showing that the countdown starts from 15secs.
        updateTimerDisplay();
        setTimeout(updateTimer, 1000);
    }


    updateTimer() 
{
    if (countdown > 0) {
    countdown--;
    updateTimerDisplay();
    } else 
    alert ("Game Over. Your Total score is" + score);
    resetGame();

}

updateTimerDisplay() 
    {
    document.getElementById ("time").innerText = "Time: " + countdown + "s";
    }

resetGame() 
{
    countdown = initialTime;
    updateTimerDisplay() 
}

//Function for Plant

function setPlant() {

    if (currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./assets/piranha.png"; //will create an image tag as the mole.

    //The next step is to randomly place the moles on the tiles. To do that we use a random tile suing Maths 

let num = getRandomTile();

if (currentMoleTile && currentMoleTile.id == num) {
    return;
}

currentPlantTile = document.getElementById(num);
currentPlantTile.appendChild(plant);

}


function selectTile() {
    if (this == currentMoleTile) {
        score +=10;
        document.getElementById ("score").innerText = score.toString(); // Update score        
    }
    else if (this == currentPlantTile) {
        document.getElementById ("score").innerText = "Game Over: " + score.toString();
        gameOver = true;

    }
 }

 function resetGame(){
 score = 0;
 countdown = 0;
 document.getElementById ("score").innerText = score.toString();
 gameOver = false;
 }