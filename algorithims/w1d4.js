// Functions
// Parts of a Functions
// KEYWORD -> Function, name of the function(), inside parenthesis optional parameters, return (optional) or side-effect
function helloWorld(string) {
    // Code Block
    console.log(`Hello ${string}`);
}
helloWorld(`World`);

// var x = 5;
    
// function setX(newValue) {
//     x = newValue; 
// }
    
// console.log(x);
// setX(15);
// console.log(x);

var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

// var      |      value
// x                5->15
// 
// 
// 
// 
// _________________________ 
// output
//  5, 15

// var      |      value
//  x               5              
// result           -5
// 
// 
// 
// _________________________ 
// output
//  5, -5, 5

/* 
result1 T diagram
var     |       value
result1         return of isPal([1,1,2,2,1])
left            0 -> 1
right           4 -> 3
arr[left]       1 -> 1
arr[right]      1 -> 2   

___________________
output
"Not a pal-indrome"

*/
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
