// Dom Elements

const quizButton = document.getElementById('button');
const input = document.getElementById('inputnumber');

const tooHigh = document.getElementById('toohigh');
const youWin = document.getElementById('youwin');
const tooLow = document.getElementById('toolow');
const lostMessage = document.getElementById('lost-message');
const numTries = document.getElementById('tries');
const guessesText = document.getElementById('guessesText');


let numGuesses = 0;
const correct = 7;

// Event Handlers

quizButton.addEventListener('click', () => {
    
    if(Number(input.value) === correct) {
        tooHigh.classList.add('hidden');
        tooLow.classList.add('hidden');
        youWin.classList.remove('hidden');
        quizButton.disabled = true;
    }
    else if(Number(input.value) < correct) {
        tooHigh.classList.add('hidden');
        tooLow.classList.remove('hidden');
        numTries.textContent = numGuesses += 1;
    }
    else if(Number(input.value) > correct) {
        tooLow.classList.add('hidden');
        tooHigh.classList.remove('hidden');
        numTries.textContent = numGuesses += 1;
    }
    if(numGuesses >= 4) {
        lostMessage.textContent = 'All out of guesses! Thanks for playing!';
        quizButton.disabled = true;
        tooHigh.classList.add('hidden');
        tooLow.classList.add('hidden');
        guessesText.classList.add('hidden');
    }
});