import './numbers.js';

function compareNumbers(input, correct) {
    const numInput = parseInt(input);
    if(numInput === correct) {
        return 0;
    } else if(numInput < correct) {
        return -1;
    } else {
        return 1;
    }}

export default compareNumbers;