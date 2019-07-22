// import functions
import getPlay from '/src/getplay.js';


// get DOM elements
const playButton = document.getElementById('play-button');
const resultMessage = document.getElementById('winlosemessage');
const resultImage = document.getElementById('result');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');

let wins = 0;
let losses = 0;

const betButton = document.getElementById('bet-button');
const moneyCount = document.getElementById('money-count');
const betInput = document.getElementById('get-input');


// return rock, paper or scissors

playButton.addEventListener('click', () => {
    // get computer's choice
    const compChoice = getPlay();

    // get user's Choice
    let userChoice = document.querySelector('input:checked').value;

    // pull image for winner
    resultImage.classList.remove('invisible');
    let src = '/assets/' + compChoice + '.png';
    resultImage.src = src; 

    compareResults(userChoice, compChoice); 

    //send results
    winCount.textContent = wins;
    lossCount.textContent = losses;

});   


function compareResults(userChoice, compChoice) {
    if(userChoice === compChoice) {
        resultMessage.textContent = 'TIED!';
    }
    else if(userChoice === 'rock') {
        if(compChoice === 'scissors') {
            resultMessage.textContent = 'WON!';
            wins++;
            winCount.textContent = wins;  
        } else {
            resultMessage.textContent = 'LOST!';
            losses++;
            lossCount.textContent = losses;
        } 
    }
    else if(userChoice === 'scissors') {
        if(compChoice === 'paper') {
            resultMessage.textContent = 'WON!';
            wins++;
            winCount.textContent = wins;  
        } else {
            resultMessage.textContent = 'LOST!';
            losses++;
            lossCount.textContent = losses;
        } 
    }
    else if(userChoice === 'paper') {
        if(compChoice === 'rock') {
            resultMessage.textContent = 'WON!';
            wins++;
            winCount.textContent = wins;  
        } else {
            resultMessage.textContent = 'LOST!';
            losses++;
            lossCount.textContent = losses;
        }
    }}

    // betting section

betButton.addEventListener('click', () => {
    // get computer's choice
    const compChoice = getPlay();

    // get user's Choice
    let userChoice = document.querySelector('input:checked').value;

    // pull image for winner
    resultImage.classList.remove('invisible');
    let src = '/assets/' + compChoice + '.png';
    resultImage.src = src; 

    compareBetResults(userChoice, compChoice); 

    //send results
    winCount.textContent = wins;
    lossCount.textContent = losses;

});   

//compareResults + betting


function compareBetResults(userChoice, compChoice) {
    if(userChoice === compChoice) {
        resultMessage.textContent = 'TIED!';
    }
    else if(userChoice === 'rock') {
        if(compChoice === 'scissors') {
            resultMessage.textContent = 'WON!';
            wins++;
            winCount.textContent = wins; 
            let x = moneyCount + betInput;
            moneyCount.textContent = x;
        } else {
            resultMessage.textContent = 'LOST!';
            losses++;
            lossCount.textContent = losses;
        } 
    }
    else if(userChoice === 'scissors') {
        if(compChoice === 'paper') {
            resultMessage.textContent = 'WON!';
            wins++;
            winCount.textContent = wins;  
        } else {
            resultMessage.textContent = 'LOST!';
            losses++;
            lossCount.textContent = losses;
        } 
    }
    else if(userChoice === 'paper') {
        if(compChoice === 'rock') {
            resultMessage.textContent = 'WON!';
            wins++;
            winCount.textContent = wins;  
        } else {
            resultMessage.textContent = 'LOST!';
            losses++;
            lossCount.textContent = losses;
        }
    }}