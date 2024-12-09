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

