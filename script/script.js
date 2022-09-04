function playRound(playerSelection) {
    let playerChoice = playerSelection;
    let computerSelection = getComputerChoice();
    let result;

    if (playerChoice == 'rock') {
        switch (computerSelection) {
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
        switch (computerSelection) {
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
        switch (computerSelection) {
            case 'Rock':
                result = 'You Lose! Rock beats Scissors';
                break;

            case 'Paper':
                result = 'You Win! Scissors beats Paper';
                break;
            
            default:
                result = 'Draw';
        }
    }

    return result;
}

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * options.length);
    
    return options[choice];
}

function playerSelection (e) {
    const choice = e.target.className;
    const resultRound = playRound(choice);
    scoreBoard.style.display = 'block';
 
    if (wins < 5 && defeats < 5) {
        const roundsHistory = document.createElement('div');

        roundsHistory.appendChild(document.createTextNode(''));

        roundsHistory.textContent = `Round ${round}: ${resultRound}`;

        scoreBoard.appendChild(roundsHistory);

        if (wins < 5 && defeats < 5) {
            if (resultRound.includes('Win')) {
                wins++;
                round++;
            } else if (resultRound.includes('Lose')) {
                defeats++;
                round++;
            } else if (resultRound.includes('Draw')) {
                draws++;
                round++;
            } 
    
            result.textContent = `Results: ${wins} wins, ${defeats} defeats and ${draws} draws.`;
        } else {
            if (wins > defeats) {
                result.textContent = `Victory: ${wins} wins, ${defeats} defeats and ${draws} draws.`;
            } else if (defeats > wins) {
                result.textContent = `Defeat: ${wins} wins, ${defeats} defeats and ${draws} draws.`;
            }
        }
    }
}

const btnChoice = Array.from(document.querySelectorAll('#choice'));
const scoreBoard = document.querySelector('.score');
const result = document.createElement('div');
let round = 1;
let wins = 0;
let defeats = 0;
let draws = 0;

btnChoice.forEach(btn => btn.addEventListener('click', playerSelection)); 

result.appendChild(document.createTextNode(`Results: ${wins} wins, ${defeats} defeats and ${draws} draws.`));

scoreBoard.prepend(result);
