// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
let nums = [2,7,11,15], target = 9;
// nums = [3,2,4], target = 6;
// nums = [3,3], target = 6;


var twoSum = function(nums, target) {
    let indices = [];
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums[i]);
        let testNum = nums[i];
        console.log('Test Num: ' + testNum);
        for (let j = nums.length - 1; j > 0; j--) {
            console.log('Second Loop: ' + nums[j]);
            if (testNum + nums[j] == target && indices.length < 2) {
                indices.push(i, j)
                console.log(indices);
                break;
            }
            
        }
    }
        
    
    return indices;
};

console.log(twoSum(nums, target));