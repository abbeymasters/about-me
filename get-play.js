// return rock, paper or scissors


export default function getPlay() {
    // generate 0, 1 or 2
    const randomNumber = Math.floor((Math.random() * 3) + 1);

    // then call rock paper or scissor
    const choice = getRockPaperScissor(randomNumber);

    // return choice
    return choice;
}

export function getRockPaperScissor(randomNumber) {
    if(randomNumber === 1) {
        return 'rock';
    } else if(randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}