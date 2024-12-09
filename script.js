function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper or scissors");
    // IF player press ESC, get player choice again
    if (!playerChoice) {
        getPlayerChoice();
    }
    playerChoice = playerChoice.toLowerCase();
    // IF player types something else than rock, paper or scissors, get player choice again
    switch (playerChoice) {
        case 'rock':
        case 'paper':
        case 'scissors':
            console.log(`Player chooses ${playerChoice}`)
            return playerChoice;
    
        default:
            getPlayerChoice();
    }
}

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    // Generate a radom number from 0 to 2, since options goes from index 0 up to the index 2
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = options[randomIndex];
    console.log(`Computer chooses ${computerChoice}`);
    return computerChoice;
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    // IF there is a tie, play round again
    if (playerChoice === computerChoice) {
        playRound();
        return;
    }
    let playerWon = (playerChoice === 'rock' && computerChoice === 'scissors')
        || (playerChoice === 'paper' && computerChoice === 'rock')
        || (playerChoice === 'scissors' && computerChoice === 'paper')
    if (playerWon) {
        console.log("Player wins the round!")
    } else {
        console.log("Computer wins the round!")
    }
}