/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let count = 0;
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i - 1] == nums[i] && count == 0){
            count++
        }
        else if(nums[i-1] != nums[i] && count == 0){
            return nums[i];
        }
        else {
            count = 0;
        }
    }
};
