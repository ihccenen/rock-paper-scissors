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
        return "Invalid"
    }
}

function game() {
    let computerWins = 0;
    let playersWins = 0;
    let draw = 0;
    let message;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Your choice', '');

        if (playerSelection == null || playerSelection == '') {
            message = 'Canceled'
            break;
        } else {
            
            let result = playRound(playerSelection, getComputerChoice());   
            
            console.log(result)
            
            if (result.includes('You Win')) {
                playersWins++;
            } else if (result.includes('You Lose')) {
                computerWins++;
            } else if (result.includes('Draw')) {
                draw++;
            } else if (result.includes('Invalid')) {
                message = 'Invalid option'
                break;
            }
        }
    }

    if (message != 'Invalid option' && message != 'Canceled') {
        if (playersWins > computerWins) {
            message = `You Win! Score: ${playersWins} wins and ${draw} draws`;
        } else if (playersWins < computerWins) {
            message = `You Lose! Score: ${computerWins} defeats and ${draw} draws`;
        } else {
            message = `Draw! Score: ${playersWins} wins and ${computerWins} defeats`;
        }
    }

    return message;
}

let fiveRound = game();

console.log(fiveRound);