/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length - count; i++) {
        if (nums[i] === 1 ) {
            let temp = nums.splice(i, 1)
            nums.push(temp[0]);
            count++;
            i--;
        }
    }
    for (let j = 0; j < nums.length - count; j++) {
        if (nums[j] === 2 ) {
            let temp = nums.splice(j, 1)
            nums.push(temp[0]);
            count++;
            j--;

        }
    }
    return nums;
};

let nums = [2,0,2,1,1,0]
console.log(sortColors(nums));