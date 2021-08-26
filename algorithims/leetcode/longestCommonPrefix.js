let testOne = ["flower", "flood", "flight"];
let testTwo = ["dog", "cat", "racecar"];

var longestCommonPrefix = function(strs) {
    // set prefix to first string in index
    let prefix = strs[0];

    // loop through other strings in index
    for(let i = 1; i < strs.length; i++){
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length -1)
            if (prefix === '') {
                return '';
            }
        }
    }
    return prefix;
};
console.log(longestCommonPrefix(testOne));
