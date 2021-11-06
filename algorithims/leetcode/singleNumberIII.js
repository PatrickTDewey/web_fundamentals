/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
    const obj = {}
    
    for(let i = 0; i < nums.length; i++){
        if(!(nums[i] in obj)){
            obj[nums[i]] = 1
        } else {
            delete obj[nums[i]];
        }
    }
    return Object.keys(obj)
};