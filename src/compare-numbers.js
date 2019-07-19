function compareNumbers(input, correct) {
    if(input === correct) {
        return 0;
    } else if(input < correct) {
        return -1;
    } else {
        return 1;
    }}

export default compareNumbers;