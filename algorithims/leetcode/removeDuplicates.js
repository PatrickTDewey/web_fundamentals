/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    
    // set k constant to start at 0
    debugger;
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        // if the index of the first unique number is equal to the next number in the list, remove the next number, and add char to the back
        if (nums[k] == nums[k+1]) {
            nums.splice(k+1, 1);
            nums.push("_");

        }
        // else, move to the next unique number by iterating k
        else {
            k++;
        }
    }

    return k;
}
let nums = [1, 1, 2];
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums2));
console.log(nums2);