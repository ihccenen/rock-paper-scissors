function getComputerChoice() {
    let choiceOptions = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * choiceOptions.length)
    
    return choiceOptions[choice];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    if (playerChoice == 'Rock') {
        if (computerSelection == 'Paper') {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection == 'Scissors') {
            return "You Win! Rock beats Scissors"
        } else {
            return "Draw"
        }
    } else if (playerChoice == 'Paper') {
        if (computerSelection == 'Scissors') {
            return "You Lose! Scissors beats Paper"
        } else if (computerSelection == 'Rock') {
            return "You Win! Paper beats Rock"
        } else {
            return "Draw"
        }
    } else if (playerChoice == 'Scissors') {
        if (computerSelection == 'Rock') {
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection == 'Paper') {
            return "You Win! Scissors beat Paper"
        } else {
            return "Draw"
        }
    } else {
        return "Invalid option"
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));