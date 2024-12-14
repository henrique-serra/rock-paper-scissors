const buttons = document.querySelectorAll("button");
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

const gameWinnerElement = document.querySelector("#gameWinner");
const playerChoiceElement = document.querySelector("#playerChoice");
const computerChoiceElement = document.querySelector("#computerChoice");
const winnerElement = document.querySelector("#winner");
const roundsPlayedElement = document.querySelector("#roundsPlayed");
const playerScoreElement = document.querySelector("#playerScore");
const computerScoreElement = document.querySelector("#computerScore");

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    // Generate a radom number from 0 to 2, since options goes from index 0 up to the index 2
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = options[randomIndex];
    console.log(`Computer chooses ${computerChoice}`);
    computerChoiceElement.textContent = `Computer chooses ${computerChoice}`;
    return computerChoice;
}

function playerWinRound(playerChoice, computerChoice) {
    if (playerChoice === 'Rock' && computerChoice === 'Scissors') return true;
    if (playerChoice === 'Paper' && computerChoice === 'Rock') return true;
    if (playerChoice === 'Scissors' && computerChoice === 'Paper') return true;
    return false;
}

function checkGameWinner(playerScore, computerScore) {
    if (playerScore === 5 && playerScore > computerScore) return "Player";
    if (computerScore === 5 && playerScore < computerScore) return "Computer";
    return false;
}

function playRound(playerChoice) {
    playerChoiceElement.textContent = `Player chooses ${playerChoice}`;
    let gameWinner = checkGameWinner(playerScore, computerScore);
    if (gameWinner) {
        roundsPlayed = 0;
        playerScore = 0;
        computerScore = 0;
    }
    let computerChoice = getComputerChoice();
    // IF there is a tie, play round again
    if (playerChoice === computerChoice) {
        console.log("It's a tie! Play again!");
        return;
    }
    if (playerWinRound(playerChoice, computerChoice)) {
        console.log("Player wins the round!");
        winnerElement.textContent = "Player wins the round!";
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else {
        console.log("Computer wins the round!");
        winnerElement.textContent = "Computer wins the round!";
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
    roundsPlayed++;
    console.group("Score");
    console.info(`Rounds played: ${roundsPlayed}`);
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.groupEnd("Score");
    gameWinner = checkGameWinner(playerScore, computerScore);
    if (gameWinner) {
        console.log(`${gameWinner} wins the game!`);
        gameWinnerElement.textContent = `${gameWinner} wins the game!`;
        return;
    }
}


for (const button of buttons) {
    button.addEventListener("click", event => {
        let playerChoice = event.target.textContent;
        console.log(`Player chooses ${playerChoice}`);
        playRound(playerChoice);
    });
}