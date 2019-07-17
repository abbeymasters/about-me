import compareNumbers from './compare-numbers';

// Dom Elements

const quizButton = document.getElementById('button');
const input = document.getElementById('inputnumber');
const numInput = parseInt(input);

const tooHigh = document.createElement('toohigh');
const youWin = document.getElementById('youwin');
const tooLow = document.getElementById('toolow');


// const tries = document.getElementById('tries'); 


// Event Handlers

quizButton.addEventListener('click', () => {
    let numButton = numInput.value;

    const result = compareNumbers(numButton, 7);
    if(result === 0) {
        youWin.classList.add('hidden');
        quizButton.disabled = true;
    } else if(result === -1) {
        tooLow.classList.add('hidden');
    } else {
        tooHigh.classList.add('hidden');
    }});