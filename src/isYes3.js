export default isYes3;

function isYes3(text) {
    if(text === 'Houston') {
        return true;
    } else if(text === 'houston') {
        return true;
    } else {
        return false;
    }
}