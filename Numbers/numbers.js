import compareNumbers from './compare-numbers';

// Dom Elements

const quizButton = document.getElementById('button');
const input = document.getElementById('inputnumber');
const tries = document.getElementById('tries'); 


// Event Handlers

quizButton.addEventListener('click', () => {
    let numButton = numInput.value;

    const result = compareNumbers(numButton, 7);
    if (result === 0) {
       return youwin.classList.remove('hidden');
} else if (result === -1) {
        return 'TOO LOW!';
} else {
    return 'TOO HIGH!';
}