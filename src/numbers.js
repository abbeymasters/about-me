import compareNumbers from './compare-numbers.js';

// Dom Elements

const quizButton = document.getElementById('button');
const input = document.getElementById('inputnumber');

const tooHigh = document.createElement('toohigh');
const youWin = document.getElementById('youwin');
const tooLow = document.getElementById('toolow');
const lostMessage = document.getElementById('lost-message');
const numTries = document.getElementById('tries');


let numGuesses = 4;
const correct = 7;

// Event Handlers

quizButton.addEventListener('click', () => {
    numGuesses -= 1;

    // correct answer
    if(compareNumbers(input.value, correct) === 0) {
        youWin.classList.remove('hidden');
        quizButton.disabled = true;
    }
    else if(input < 7) {
        tooLow.classList.remove('hidden');
        numTries.textContent = numGuesses -= 1;
    }
    else if(input > 7) {
        tooHigh.classList.remove('hidden');
        numTries.textContent = numGuesses -= 1;
    }
    else if(numGuesses < 1) {
        lostMessage.textContent = 'All out of guesses! Thanks for playing!'
    }
});