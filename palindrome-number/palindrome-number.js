/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //check if the value is a negative number which will always output false
    //set all the integer value into an array list
    //check the first and last index of the array to see if they match
    //if one of them do not match, return false
    //if everything matches, return true
    
    //check if x is negative
    if(x < 0) {
        return false;
    }
    //create an array storage
    let result = [];
    //loop through and store each digit in the array
    while(x > 0) {
        result.push(x % 10);
        x = Math.floor(x/10);
    }
    
    //loop through with limit to half of the length
    for(let i = 0; i < Math.floor(result.length); i++) {
        if(result[i] !== result[result.length-1-i]) {
            return false;
        }
    }
        //check if the first index and last index match
        //if one of them do not match, return false
    return true;
    //return true
};