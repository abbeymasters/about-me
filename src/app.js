import isYes from './isYes.js'; 
import isYes2 from './favoritebook.js'; 
import isYes3 from './born-question.js'; 

// Reference needed DOM elements

const quizButton = document.getElementById('quizbutton');
const quizResults = document.getElementById('quizresults');
const quizResults2 = document.getElementById('quizresults2');
const quizResults3 = document.getElementById('quizresults3');
const gradeResults = document.getElementById('grade');
const resultsHeader = document.getElementById('resultsheader');

let quizScore = 0;

// Event Handlers
quizButton.onclick = function() {
    const confirmed = confirm('Do you want to continue with the quiz?');
    if(!confirmed) {
        return;	
    }

    const yourName = prompt('What is your name?');

    const firstQuestion = prompt('Who is this quiz about?');
    let correct = isYes(firstQuestion);
    let response = 'Her name is ' + firstQuestion + '!';

    if(correct) {
        response += ' Correct.';
        quizScore += 1 / 3;
    } 
    else {
        response += ' Incorrect! Her name is Abbey.';
    }

    const secondQuestion = prompt('What is her number one favorite book?');
    let correct2 = isYes2(secondQuestion);
    let response2 = 'Her #1 favorite book is ' + secondQuestion + '!';

    if(correct2) {
        response2 += ' Correct.';
        quizScore += 1 / 3;
    }
    else {
        response2 += ' Incorrect! It is actually Americanah.';
    }
    
    const thirdQuestion = prompt('Where was she born?');
    let correct3 = isYes3(thirdQuestion);
    let response3 = 'She was born in ' + thirdQuestion + '!';

    if(correct3) {
        response3 += ' Correct.';
        quizScore += 1 / 3;
    } else {
        response3 += ' Incorrect! She was born in Houston.';
    }

    alert('Your results are ready!');
    if(!confirmed) {
        return;	
    }
    
    quizScore = quizScore * 100;
    quizScore = Math.round(quizScore);


    resultsHeader.classList.remove('hidden');
    quizResults.textContent = response;
    quizResults2.textContent = response2;
    quizResults3.textContent = response3;
    gradeResults.textContent = yourName + ', you got ' + quizScore + '%' + ' correct!';


};