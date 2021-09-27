let array1 = [1, 2, 3];
let expected = 6;
let number = 5;

function recursiveAddArray(array) {
    let num = array.pop();
    if (array.length > 0) {
        num += recursiveAddArray(array)
    }
    return num;
}
console.log(recursiveAddArray(array1));

// let start = 1;
// let total = 0;
// function recursiveSigma(number){
//     if (start <= number) {
//         total += start;
//         start++
//         return recursiveSigma(number)
//     }
//     return total;
// }
// console.log(recursiveSigma(number));

function recursSig(num, total = 0, start = 1) {
    if (start <= num) {
        total += start;
        start++
        return recursSig(num, total, start)
    }
    return total;
}
console.log(recursSig(number));