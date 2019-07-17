export default compareNumbers;

function compareNumbers(number) {
    const numInput = parseInt(input);
    if(numInput === 7) {
        return youWin;
    } else if(numInput < 7) {
        return tooLow;
    } else {
        return tooHigh;
    }}