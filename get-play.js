
     // return rock, paper or scissors


export default function getPlay() {
    // generate 0, 1 or 2
    const randomNumber = Math.random();

    // then call rock paper or scissor
    const choice = getRockPaperScissor(randomNumber);

    // return choice
    return choice;
}

export function getRockPaperScissor(randomNumber) {
    if(randomNumber === 0 || randomNumber < 0.35) {
        return 'rock';
    } else if(randomNumber < 0.75 && randomNumber >= 0.35) {
        return 'paper';
    } else {
        return 'scissors';
    }
}