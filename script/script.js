function getComputerChoice() {
    let choiceOptions = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * choiceOptions.length)

    return choiceOptions[choice];
}