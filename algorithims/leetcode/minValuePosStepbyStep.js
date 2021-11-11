/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
    let low = 0, total = 0;
    for(let i = 0; i < nums.length; i++){
        total += nums[i];
        low = Math.min(low, total)
    }
    if(low === 0){
        return 1;
    }
    else {
        return 0 - low + 1;
    }
    
};



// var minStartValue = function(nums) {
//     let startValue = 1, total = startValue, count = 0;
//     while(count < nums.length){
//         total += nums[count];
//         if(total < 1){
//             startValue++;
//             total = startValue;
//             count = -1
//         }
//         count++;
        
//     }
//     return startValue;
    
// };