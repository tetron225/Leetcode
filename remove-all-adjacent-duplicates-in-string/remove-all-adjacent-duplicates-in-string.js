/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    //create a result string
    //let result = '';
    //create a didReplace and set it to true
    let didReplace = true;
    //create a while loop where didReplace is true
    
    while(didReplace) {
        //create a doesExist boolean and set to false
        let firstString = '';
        let secondString = '';
        let doesExist = false;
        //create a for loop that checks every even indices in s
        for(let i = 0; i < s.length; i++) {
            //if a duplicate exists
            debugger;
            if(s[i] === s[i+1]) {
                //doesExist is set to true
                doesExist = true;
                //break the loop
                firstString = i;
                secondString = i+2;
                break;
            }
        }
        //if doesExist is true
        if(doesExist) {
            s = s.substring(0, firstString) + s.substring(secondString);
            //s = result;
        } else {
            didReplace = false;
        }
            //substring the value into result
        //if doesExist is false
            //set didReplace to false
    }
    //return result
    return s;
};