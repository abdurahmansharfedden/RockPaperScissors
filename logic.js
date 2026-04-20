let humanScore = 0;
let computerScore = 0;

let a;
let b;

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

function getHumanChoice(){
    let y = prompt("Enter Rock, Paper, or Scissors");
    y.toLocaleLowerCase();
    if (y === "rock") {
       b = 1;
    }else if (y === "paper") {
        b = 2;
    } else if (y === "scissors") {
        b = 3;
    } else {
        alert("Error Enter a valid answer");
        getHumanChoice();
    }

    return b;
}

function playRound(){
    let humanChoice = b;
    let computerChoice = a;

    if (a === b) {
        console.log("Draw");
    } else if (a === 1 && b === 2) {
        console.log("Human wins! Paper beats rock")
        humanScore = humanScore + 1;
    } else if (a === 2 && b === 1) {
        console.log("Computer wins! Paper beats rock")
        computerScore = computerScore + 1;
    } else if (a === 1 && b === 3) {
        console.log("Computer wins! Rock beats scissors")
        computerScore = computerScore + 1;
    } else if (a === 3 && b === 1) {
        console.log("Human wins! Rock beats scissors")
        humanScore = humanScore + 1;
    } else if (a === 2 && b === 3) {
        console.log("Human wins! Scissors beats rock")
        humanScore++;
    } else if (a === 3 && b === 2) {
        console.log("Computer wins! Scissors beats rock")
        computerScore++;
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        getComputerChoice();
        getHumanChoice();
        playRound();
    }
    if (humanScore > computerScore){
        console.log("Human wins! ");
    }else if (computerScore > humanScore){
        console.log("Computer Wins! ");
    } else {
        console.log("It's a draw! ");
    }
    console.log("The score is | Human: " + humanScore + " Computer: " + computerScore );
}

playGame();