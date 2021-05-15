/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //input: an array, target number
    //output: an array of two integers
    //constraints: has exactly one solution
    //edgecases: if nums is not an array of integers or if target is not an integer
    
    //create a result array
    let result = [];
    
    //create a for loop for the first array pointer i
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
        //create a for loop for the second array pointer j
            //if the value at i + j is the same as target, return the i,j value
};