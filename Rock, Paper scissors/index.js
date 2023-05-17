const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = "Result: " + checkWinner();

}))

function computerTurn() {
    var randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            computer = "ROCK"
            break;

        case 2:
            computer = "PAPER"
            break;

        case 3:
            computer = "SCISSORS"
            break;
        default:
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw";
    }
    else if (computer == "ROCK"){
        return (player == "PAPER") ? "You win" : "you lose!"
    }
    else if (computer == "PAPER"){
        return (player == "SCISSORS") ? "You win" : "you lose!"
    }
    else if (computer == "SCISSORS"){
        return (player == "ROCK") ? "You win" : "you lose!"
    }
}