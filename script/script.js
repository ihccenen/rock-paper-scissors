function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * options.length)
    
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let result;

    if (playerChoice == 'rock') {
        switch(computerSelection) {
            case 'Paper':
                result = 'You Lose! Paper beats Rock';
                break;

            case 'Scissors':
                result = 'You Win! Rock beats Scissors';
                break;
            
            default:
                result = 'Draw';
        }
    } else if (playerChoice == 'paper') {
        switch(computerSelection) {
            case 'Scissors':
                result = 'You Lose! Scissors beats Paper';
                break;

            case 'Rock':
                result = 'You Win! Paper beats Rock';
                break;
            
            default:
                result = 'Draw';
        }
    } else if (playerChoice == 'scissors') {
        switch(computerSelection) {
            case 'Rock':
                result = 'You Lose! Rock beats Scissors';
                break;

            case 'Paper':
                result = 'You Win! Scissors beats Paper';
                break;
            
            default:
                result = 'Draw';
        }
    } else {
        return 'Invalid option';
    }

    return result;
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
            message = `You Win! Score: ${playersWins} win and ${draw} draw`;
        } else if (playersWins < computerWins) {
            message = `You Lose! Score: ${computerWins} defeat and ${draw} draw`;
        } else {
            message = `Draw! Score: ${playersWins} win and ${draw} draw`;
        }
    }

    console.log(message);
}

game();