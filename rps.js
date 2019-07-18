// Import functions
import getPlay from './get-play.js';

// Call elements from DOM

const playButton = document.getElementById('play-button');
const result = document.getElementById('result');
const message = document.getElementById('winlosemessage');
const winCount = document.getElementById('win-count');
const loseCount = document.getElementById('loss-count');

let wins = 0;
let losses = 0;

// CLICK BUTTON --> RANDOMLY CHOOSE A WINNER --> DISPLAY IMAGE

playButton.addEventListener('click', () => {
    const choice = getPlay();
    
    result.classList.remove('invisible');
    let src = './src/assets/' + choice + '.png';
    result.src = src; 

    const whichOne = document.querySelector('input:checked');

    const won = whichOne.value === choice;

    if(won) {
        message.textContent = 'WON!';
        wins++;
        winCount.textContent = wins;       
    } else {
        message.textContent = 'LOST!';
        losses++;
        loseCount.textContent = losses;
    }
});
