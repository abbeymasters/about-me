import './isYes.js';
export default isYes;

function isYes(text) {
    if(text === 'abbey') {
        return true;
    } else if(text === 'Abbey') {
        return true;
    } else { 
        return false;
    }}
