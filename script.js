
// get random elment from array for computer choice 
// get from stackoverflow -.0

/**
 * game rule 
 * 
 * rock & paper & scissors
 *
 * * rock beats scissors but losts to paper 
 * * paper beats rock but losts to scissors 
 * * scissors beats paper but losts to rock 
 * 
 * * in one game, says 3 round, one who get more score point will wins
 * ? userScore and computerScore.
 * 
 * * userinput and computerInput
 * ? userInput <- prompt, computerInput <- from function
 * 
 */

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

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


