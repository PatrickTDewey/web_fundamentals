var findDisappearedNumbers = function(nums) {
    let result = []
    for(let i = 0; i < nums.length; i++){
            let num = Math.abs(nums[i]);
            let idx = num - 1;
            console.log(num, idx)
            nums[idx] = Math.abs(nums[idx]) * -1;
    }
    for (let i = 0, len = nums.length; i  < len ;i++) {
      if (nums[i] > 0) {
          result.push(i+1)
      }
    }
    console.log(nums)
    return result;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
