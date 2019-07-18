// return rock, paper or scissors - this is the computer's choice
export default function getPlay


function getCompAnswer() {
    const computerOptions = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    
    options.forEach(option => {
        option.addEventListener('click', function() {
        const computerChoice  =  computerOptions[randomNumber];
        return computerChoice;
    });



    function getPlay() {
    // generate number
    const randomNumber = Math.floor((Math.random() * 3) + 1);

    // then call rock paper or scissor
    const choice = getRockPaperScissor(randomNumber);

    // return choice
    return choice;
}

//export function getRockPaperScissor(randomNumber) {
 //   if(randomNumber === 1) {
   //     return 'rock';
  //  } else if(randomNumber === 2) {
   //     return 'paper';
   // } else {
     //   return 'scissors';
   // }
//}