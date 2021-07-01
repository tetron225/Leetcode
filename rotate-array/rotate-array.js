/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //input: an array, and the movement step k
    //output: resultant array
    //constraints: given
    //edge cases: if there is 0 length array or 1 length array
    
    //create a conditional statement where if the length of the array is 0 or 1, return the array itself
    if(nums.length === 0 || nums.length === 1) {
        return nums;
    }
    //we slice starting at 0 to nums.length-k
    if(k > nums.length) {
        let removalAmount = Math.abs(nums.length-k)
        let tempVal = nums.slice(nums.length-removalAmount);
        nums.splice(nums.length-removalAmount, removalAmount);
        nums.unshift(...tempVal);
    } else {
        let tempVal = nums.slice(0,Math.abs(nums.length-k))
        //we splice starting at 0 and the result of nums.length-k
        nums.splice(0, Math.abs(nums.length-k))
        //we push the sliced array back into the nums array
        nums.push(...tempVal);    
    }
    
    //return nums;
    return nums;
};