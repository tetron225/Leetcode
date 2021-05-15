/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //input: an integer
    //output: integer
    //constraints: 32 bit integer
    //edge-case: if its not an integer
    
    //create a reverse array
    let reverse = []
    //create a result value
    let result = 0;
    let isNegative = false;
    if(x < 0) {
        isNegative = true;
        x = x * -1;
    }
    
    
    
    //use a while loop to iterate through the value by getting the mod of 10 to isolate each digit
    while(x !== 0) {
        let temp = x % 10;
        x = Math.floor(x/10);
        reverse.push(temp);
    }
        //add the result of the mod into the result array
    console.log(Math.pow(2, 31));
    //go through a for loop to iterate through the reverse array
    for(let i = 0; i < reverse.length; i++) {
        result = result + (reverse[i] * Math.pow(10, reverse.length - 1 - i))
    }
        //result will add towards the index value times 10 ^ length - current i
    if(result > Math.pow(2, 31)) {
        return 0;
    }
    
    if(isNegative) {
        result = result * -1;
    } 
    
    
    
    return result;
};