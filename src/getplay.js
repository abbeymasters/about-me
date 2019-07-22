
export default function getPlay() {

// generate random number 0, 1, or 2
    const randomNumber = Math.floor(Math.random() * 3);

// get function
    const compChoice = getRockPaperScissor(randomNumber);

// return
    return compChoice;

}

export function getRockPaperScissor(randomNumber) {
    if(randomNumber === 0) {
        return 'rock';
    } else if(randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
