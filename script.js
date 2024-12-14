const buttons = document.querySelectorAll("button");
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    // Generate a radom number from 0 to 2, since options goes from index 0 up to the index 2
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = options[randomIndex];
    console.log(`Computer chooses ${computerChoice}`);
    return computerChoice;
}

function playerWinRound(playerChoice, computerChoice) {
    if (playerChoice === 'Rock' && computerChoice === 'Scissors') return true;
    if (playerChoice === 'Paper' && computerChoice === 'Rock') return true;
    if (playerChoice === 'Scissors' && computerChoice === 'Paper') return true;
    return false;
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    // IF there is a tie, play round again
    if (playerChoice === computerChoice) {
        playRound(playerChoice);
        return;
    }
    if (playerWinRound(playerChoice, computerChoice)) {
        console.log("Player wins the round!");
        playerScore++;
    } else {
        console.log("Computer wins the round!");
        computerScore++;
    }
    roundsPlayed++;
    console.group("Score");
    console.info(`Rounds played: ${roundsPlayed}`);
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.groupEnd("Score");
}

for (const button of buttons) {
    button.addEventListener("click", event => {
        let playerChoice = event.target.textContent;
        console.log(`Player chooses ${playerChoice}`);
        playRound(playerChoice);
    });
}

function playGame() {
    roundsPlayed = 0;
    playerScore = 0;
    computerScore = 0;
    let keepPlaying = true;
    while (keepPlaying) {
        if (playerScore === 5 || computerScore === 5) {
            let winner = playerScore > computerScore ? "Player" : "Computer";
            console.log(`${winner} wins!`);
            keepPlaying = false;
        }
        playRound();
    }
}