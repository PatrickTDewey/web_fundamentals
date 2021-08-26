// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

/* 
Input: x = 121
Output: true
*/

var isPalendrome = function(x) {
    let reversed = 0, copyNum = x;
    while(copyNum != 0) {
        lastDigit = copyNum % 10;
        reversed = (reversed * 10) + lastDigit;
        copyNum = Math.trunc(copyNum / 10);
    }
    if (reversed < 0) {
        reversed *= (-1);
        reversed += '-';
    }
    if (reversed == x) {
        return true;
        
    } else {
        return false;
    }
}

console.log(isPalendrome(-363));

// var isPalendromeString = function(x) {
//     let string = '' + x;
//     console.log(x);
//     console.log(typeof(string));
// }
// isPalendromeString(450)