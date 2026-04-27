let humanScore = 0;
let computerScore = 0;

let a;
let b;


const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

rockButton.addEventListener("click", () => {
    b = 1;
    getComputerChoice();
    playRound();
});

paperButton.addEventListener("click", () => {
    b = 2;
    getComputerChoice();
    playRound();
});

scissorsButton.addEventListener("click", () => {
    b = 3;
    getComputerChoice();
    playRound();
});



function getComputerChoice(){
    let x = Math.random();
    let comp;
    if (x >= 0 && x < 0.33) {
        comp = "Rock"
        a = 1;
    } else if (x >= 0.33 && x < 0.66) { 
        comp = "Paper"
        a = 2;
    } else {
        comp = "Scissors"
        a = 3;
    }

    return a;
}

// function getHumanChoice(){
//     let y = prompt("Enter Rock, Paper, or Scissors");
//     y = y.toLowerCase();
//     if (y === "rock") {
//        b = 1;
//     }else if (y === "paper") {
//         b = 2;
//     } else if (y === "scissors") {
//         b = 3;
//     } else {
//         alert("Error Enter a valid answer");
//         getHumanChoice();
//     }

//     return b;
// }

function playRound(){
    let humanChoice = b;
    let computerChoice = a;

    if (a === b) {
        resultsDiv.textContent = "It's a draw!";
    } else if (a === 1 && b === 2) {
        resultsDiv.textContent = "Human wins! Paper beats rock";
        humanScore = humanScore + 1;
    } else if (a === 2 && b === 1) {
        resultsDiv.textContent = "Computer wins! Paper beats rock";
        computerScore = computerScore + 1;
    } else if (a === 1 && b === 3) {
        resultsDiv.textContent = "Computer wins! Rock beats scissors";
        computerScore = computerScore + 1;
    } else if (a === 3 && b === 1) {
        resultsDiv.textContent = "Human wins! Rock beats scissors";
        humanScore = humanScore + 1;
    } else if (a === 2 && b === 3) {
        resultsDiv.textContent = "Human wins! Scissors beats paper";
        humanScore++;
    } else if (a === 3 && b === 2) {
        resultsDiv.textContent = "Computer wins! Scissors beats paper";
        computerScore++;
    }

    scoreDiv.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
}




  


// function playGame(){
//     for(let i = 0; i < 5; i++){
//         getComputerChoice();
//         getHumanChoice();
//         playRound();
//     }
//     if (humanScore > computerScore){
//         console.log("Human wins! ");
//     }else if (computerScore > humanScore){
//         console.log("Computer Wins! ");
//     } else {
//         console.log("It's a draw! ");
//     }
//     console.log("The score is | Human: " + humanScore + " Computer: " + computerScore );
// }

playGame();