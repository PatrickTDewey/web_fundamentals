const removeElement = (nums, val) => {
    debugger
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums[i] = "_";
        }
        else {
            k++;
        }
    } 
    // sorts by unicode
    nums.sort();

    return k;
}

let nums = [3,2,2,3]
console.log(removeElement(nums, 3));
console.log(nums);