// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
//  var threeSum = function(nums) {
//     let output = []
//     let tripDex = 0
//     for (let i = 0; i < nums.length; i++) {
//         debugger
//         if (output[tripDex] == undefined) {
//             output[tripDex] = [nums[i]];
//         }
//         for (let j = 0; j < nums.length; j++) {

//             if (output[tripDex].reduce((a, b) => a + b) <= 0 && output[tripDex].length < 3) {
//                 if (output[tripDex].reduce((a, b) => a + b) + nums[j] <= 0 || output[tripDex].reduce((a, b) => a + b) + nums[j] == 0 ) {
//                     output[tripDex].push(nums[j]);
//                 }
//             }
//         }
//         tripDex++
//     }
//     return output
// };
// console.log(threeSum([-1,0,1,2,-1,-4]));
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {

    let output = []
    nums.sort((a, b) => (a - b))
    for (let i = 0; i < nums.length - 2; i++) {
        if (i !=0 && nums[i-1] == nums[i]) {
            continue;
        }
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] == 0 && output.every) {
                        let arr = [nums[i], nums[j], nums[k]]
                        let uniqueflag = true;
                        
                        
                        if (uniqueflag){
                            output.push(arr);
                        }                    
                }
            }
        }
    }
    
    return uniqueArray;
}
console.log(threeSum([-1,0,1,2,-1,-4]))