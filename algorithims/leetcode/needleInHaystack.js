/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === haystack) {
        return 0;
    }
    // make a comparison value
    let occurence;
    let needleIndex = 0;
    let storedIndex;
    
    // iterate through haystack until needle is found return the index of the first occurence
    //brute force
    for (let index = 0; index < haystack.length; index++) {
        let pointer = index;
        debugger
        
        while (haystack[pointer] == needle[needleIndex] && needle[needleIndex]) {
            if (needleIndex === 0) {
                storedIndex = pointer;
            } 
            occurence ++;
            pointer++
            needleIndex++;
        }
        if (occurence != needle.length) {
            occurence = 0;
            needleIndex = 0;
        } else {
            break;
        }
    }
    if (needle === '') {
        return 0;
    }
    if (occurence == needle.length) {
        return storedIndex;
    } else{
        return -1
    }
}
// refactored
// const needleHaystack = (haystack, needle) => {
//     if (needle === haystack) {
//         return 0;
//     }
//     if (haystack.length > needle.length) {
//         return -1;
//     }
//     for (let index = haystack.length - 1; index >= 0; index--) {
//         const element = array[index];
        
//     }
// }
let haystack = "mississippi" ,needle = "issip";
console.log(strStr(haystack, needle));