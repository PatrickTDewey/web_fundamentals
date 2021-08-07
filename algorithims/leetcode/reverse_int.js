/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21

Input: x = 0
Output: 0
*/

var reverse = function (x) {
    if (x == 0) {
        return 0;
    }
    let toString = '' + x;
    let reverseString = '';
    if ((-2) ** 31 <= x && x <= (2 ** 31) - 1) {
        for (let i = toString.length - 1; i >= 0; i--) {
            reverseString += toString[i];
        }
    }
    if ((-2) ** 31 <= parseInt(reverseString) && parseInt(reverseString) <= (2 ** 31) - 1) {
        if (x < 0) {
            return parseInt(reverseString) * (-1);

        } else if (x > 0) {
            return parseInt(reverseString);
        } 
    }
    else {
        return 0;
    }
}
console.log(reverse(2347));