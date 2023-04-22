
// get random elment from array.


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

// console.log(playerSelection);
// console.log(computerSelection);

let playerScore = 0;
let computerScore = 0;

function playRound() {
    const playerSelection = prompt("Please select your choice");
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore += 1;
            console.log("You won!");
        } else {
            computerScore += 1;
            console.log("You lost!");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore += 1;
            console.log("You won!");
        } else {
            computerScore += 1;
            console.log("You lost!");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore += 1;
            console.log("You won!");
        } else {
            computerScore += 1;
            console.log("You lost!");
        }
    }

    console.log(`You: ${playerSelection}, C: ${computerSelection}\nScore: ${playerScore}, ${computerScore}`);
}


function game() {
    for (let i = 0; i < 3; i++) {
        playRound();
        console.log('--------------------------------------------');
    }
    if (playerScore > computerScore) {
        console.log(`You win!: You have ${playerScore} points and the computer has ${computerScore} points.`);
    } else if (playerScore < computerScore) {
        console.log(`You lose!: you have ${playerScore} points and the computer has ${computerScore} points.`);
    } else {
        console.log(`It's a tie!: both of you have the same points ${playerScore} and ${computerScore}.`);
    }
}

game();


