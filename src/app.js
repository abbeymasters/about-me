import isYes from './isYes.js'; 
import isYes2 from './favoritebook.js'; 
import isYes3 from './bornQuestion.js'; 

// Reference needed DOM elements

const quizButton = document.getElementById('quizbutton');
const quizResults = document.getElementById('quizresults');
const quizResults2 = document.getElementById('quizresults2');
const quizResults3 = document.getElementById('quizresults3');
const gradeResults = document.getElementById('grade');
const resultsHeader = document.getElementById('resultsheader');
const xImage1 = document.getElementById('ximage1');
const checkImage1 = document.getElementById('checkimage1');
const xImage2 = document.getElementById('ximage2');
const checkImage2 = document.getElementById('checkimage2');
const xImage3 = document.getElementById('ximage3');
const checkImage3 = document.getElementById('checkimage3');

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
        response += checkImage1.classList.remove('hidden');
        quizScore += 1 / 3;
    } 
    else {
        response += xImage1.classList.remove('hidden');
    }

    const secondQuestion = prompt('What is her number one favorite book?');
    let correct2 = isYes2(secondQuestion);
    let response2 = 'Her #1 favorite book is ' + secondQuestion + '!';

    if(correct2) {
        response2 += checkImage2.classList.remove('hidden');
        quizScore += 1 / 3;
    }
    else {
        response2 = xImage2.classList.remove('hidden');
    }
    
    const thirdQuestion = prompt('Where was she born?');
    let correct3 = isYes3(thirdQuestion);
    let response3 = 'She was born in ' + thirdQuestion + '!';

    if(correct3) {
        response3 += checkImage3.classList.remove('hidden');
        quizScore += 1 / 3;
    } else {
        response3 += xImage3.classList.remove('hidden');
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