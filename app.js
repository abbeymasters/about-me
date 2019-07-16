import isYes from '../isYes.js'; 
import isYes2 from '../isYes2.js'; 
import isYes3 from '../isYes3.js'; 

// Reference needed DOM elements

const quizButton = document.getElementById('quizbutton');
const quizResults = document.getElementById('quizresults');

// Event Handlers
quizButton.onclick = function() {
    const confirmed = confirm('Do you want to continue with the quiz?');
    if(!confirmed) {
        return;	
    }

    const firstQuestion = prompt('What is your name?');
    let correct = isYes(firstQuestion);
    let response = 'Her name is ' + firstQuestion + '!';

    if(correct) {
        response += ' Correct.';
    }
    else {
        response += ' Incorrect! Her name is Abbey.';
    }

    const secondQuestion = prompt('What is her number one favorite book?');
    let correct2 = isYes2(secondQuestion);
    let response2 = 'Her #1 favorite book is ' + secondQuestion + '!';

    if(correct2) {
        response2 += ' Correct.';
    }
    else {
        response2 += ' Incorrect! It is actually Americanah.';
    }
    
    const thirdQuestion = prompt('Where was she born?');
    let correct3 = isYes3(thirdQuestion);
    let response3 = 'She was born in ' + thirdQuestion + '!';

    if(correct3) {
        response3 += ' Correct.';
    } else {
        response3 += ' Incorrect! She was born in Houston.'
    }

    quizResults.textContent = response + ' ' + response2 + ' ' + response3;

};