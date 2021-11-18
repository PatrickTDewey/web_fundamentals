/**
 * @param {number[]} nums
 * @return {number[]}
 */
// solved used dynamic programming of Longest Increasing Subsequence
 var largestDivisibleSubset = function(nums) {
    // sort nums so you need to only check if a % b == 0 instead of either or
    nums = nums.sort((a, b) => a-b);

    // create an Array that will store the size of each of the subSets for each num in the nums array
    // default being 1 because nums[i] % nums[i] = 0
    let dpArray = Array(nums.length).fill(1);
    
    // initialize max to 0 and iterate through nums
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        // set alias for nums[i]
        let current = nums[i];
        for (let j = 0; j < i; j++) {
            // * note, given elements a, b, and c. if b % a = 0 & c % b = 0, then c % a = 0 
            // if the current num is divisible by num[j] and the size of the dp[j]+1 is greater then
            // the size of the elements current max subset, set the size to 1 + dp[j]
            debugger
            if(current % nums[j] == 0 && (dpArray[j] + 1) > dpArray[i]){
               
                dpArray[i] = 1 + dpArray[j];

               // update max if bigger
               if (dpArray[i] > max) {
                   max = dpArray[i];
               }

            }
        }
    }
    if (max === 0) {
        return nums[0];
    }
    
    let prev = -1, longestDivisSubset = [];
    for (let k = nums.length - 1; k >= 0; k--) {
       // generate longest max subset, check if the current element in dpArray is equal to our max value
       // if so, then add element to subset, decrement max, and reassign previous to be the element
       if(dpArray[k] === max){
           if(prev === -1) prev = nums[k];

           longestDivisSubset.push(nums[k]);
           prev = nums[k];
           max--;
       }
    }

    return longestDivisSubset;
};
largestDivisibleSubset([3,17])argestDivisibleSubset([3,17])
