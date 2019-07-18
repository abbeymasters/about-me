// Import functions
import getPlay from './get-play.js';
import playMatch from './get-play.js';

// Call elements from DOM

const playButton = document.getElementById('play-button');
const result = document.getElementById('result');
const message = document.getElementById('winlosemessage');
const winCount = document.getElementById('win-count');
const loseCount = document.getElementById('loss-count');

let wins = 0;
let losses = 0;

const whichOne = document.querySelector('input:checked');

// CLICK BUTTON --> RANDOMLY CHOOSE ROCK, PAPER, OR SCISSORS --> DISPLAY IMAGE

playButton.addEventListener('click', () => {
    const compareHands = (whichOne, computerChoice) =>{
    
    result.classList.remove('invisible');
    let src = './src/assets/' + choice + '.png';
    result.src = src; 

    // THE USER'S CHOICE
    const tie = whichOne.value === choice;

    
    // IF THEN
    if(tie) {
        message.textContent = 'TIED!';
        return;   
    } 
    
    if(whichOne.value === 'rock') {
        if(whichOne.value === 'scissors')
            message.textContent = 'WON!';
        wins++;
        winCount.textContent = wins;    
    } else {
        message.textContent = 'LOST!';
        losses++;
        loseCount.textContent = losses;
    }

    if(whichOne.value === 'scissors') {
        if(whichOne.value === 'paper')
            message.textContent = 'WON!';
        wins++;
        winCount.textContent = wins;    
    } else {
        message.textContent = 'LOST!';
        losses++;
        loseCount.textContent = losses;
    }

    if(whichOne.value === 'paper') {
        if(whichOne.value === 'rock')
            message.textContent = 'WON!';
        wins++;
        winCount.textContent = wins;    
    } else {
        message.textContent = 'LOST!';
        losses++;
        loseCount.textContent = losses;
    }
};

// Bet Button Section — Incomplete

const betButton = document.getElementById('bet-button');
const betInput = document.getElementById('bet-input');
const moneyCount = document.getElementById('money-count');


betButton.addEventListener('click', () => {
    const choice = getPlay();
    
    result.classList.remove('invisible');
    let src = './src/assets/' + choice + '.png';
    result.src = src; 

    const whichOne = document.querySelector('input:checked');
    const won = whichOne.value === choice;

    let win = 5 + amount;
    let lose = 5 - amount;

    if(won) {
        message.textContent = 'WON!';
        wins++;
        winCount.textContent = wins;  
        moneyCount.textContent = '$' + win;      
    } else {
        message.textContent = 'LOST!';
        losses++;
        loseCount.textContent = losses;
        moneyCount.textContent = '$' + lose;
    }
});