const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let yourChoice
let computerChoice
let result

// displaying yourChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = yourChoice
    generateComputerChoice()
    getResult()
}))

// generating computerChoice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'rock'
    }
    if (randomNumber === 4) {
        computerChoice = 'lizard'
    }
    if (randomNumber === 5) {
        computerChoice = 'spock'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

// getting result

function getResult() {
    if (computerChoice === yourChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'rock' && yourChoice === 'paper') {
        result = 'You won! Paper covers the rock.'
    }
    if (computerChoice === 'rock' && yourChoice === 'spock') {
        result = 'You won! Spock vaporizes the rock.'
    }
    if (computerChoice === 'rock' && yourChoice === 'lizard') {
        result = 'You lost! Rock crushes the lizard.'
    }
    if (computerChoice === 'rock' && yourChoice === 'scissors') {
        result = 'You lost! Rock crushes the scissors.'
    }
    if (computerChoice === 'paper' && yourChoice === 'scissors') {
        result = 'You won! Scissors cut the paper.'
    }
    if (computerChoice === 'paper' && yourChoice === 'rock') {
        result = 'You lost! Paper covers the rock.'
    }
    if (computerChoice === 'paper' && yourChoice === 'lizard') {
        result = 'You won! Lizard eats the paper.'
    }
    if (computerChoice === 'paper' && yourChoice === 'spock') {
        result = 'You lost! Paper disproves Spock.'
    }
    if (computerChoice === 'scissors' && yourChoice === 'rock') {
        result = 'You won! Rock crashes the scissors.'
    }
    if (computerChoice === 'scissors' && yourChoice === 'paper') {
        result = 'You lost! Scissors cut the paper.'
    }
    if (computerChoice === 'scissors' && yourChoice === 'lizard') {
        result = 'You lost! Scissors decapitate the lizard.'
    }
    if (computerChoice === 'scissors' && yourChoice === 'spock') {
        result = 'You won! Spock smashes the scissors.'
    }
    if (computerChoice === 'spock' && yourChoice === 'paper') {
        result = 'You won! Paper disproves Spock.'
    }
    if (computerChoice === 'spock' && yourChoice === 'rock') {
        result = 'You lost! Spock vaporizes rock.'
    }
    if (computerChoice === 'spock' && yourChoice === 'scissors') {
        result = 'You lost! Spock smashes the scissors.'
    }
    if (computerChoice === 'spock' && yourChoice === 'lizard') {
        result = 'You won! Lizard poisons Spock.'
    }
    if (computerChoice === 'lizard' && yourChoice === 'spock') {
        result = 'You lost! Lizard poisons Spock.'
    }
    if (computerChoice === 'lizard' && yourChoice === 'rock') {
        result = 'You won! Rock crushes lizard.'
    }
    if (computerChoice === 'lizard' && yourChoice === 'paper') {
        result = 'You lost! Lizard eats paper.'
    }
    if (computerChoice === 'lizard' && yourChoice === 'scissors') {
        result = 'You won! Scissors decapitate lizard.'
    }
    
    resultDisplay.innerHTML = result
}


