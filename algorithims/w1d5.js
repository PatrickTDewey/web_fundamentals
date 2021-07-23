let fruit1 = 'apples';
let fruit2 = 'oranges';
let temp = "";
console.log(`fruit one: ${fruit1} fruit two: ${fruit2}`);
temp = fruit1;
fruit1 = fruit2;
fruit2 = temp;
console.log(`fruit one: ${fruit1} fruit two: ${fruit2}`);


let array1 = ['a','b','c'];
// console.log(array1);
// for (let index = 0; index < array1.length; index++) {
    
    

// }

function reverse(myArr) {
    for (let index = myArr.length; index >= 0; index--) {
        for (let index = 0; index < myArr.length; index++) {
            console.log(myArr[index]);
        }
    }
}

reverse(array1)


function reverseArray(arr) {
    let temp;
    let lastIndex = arr.length - 1;

    for (let index = 0; index < arr.length / 2; index++) {

        temp = arr[index];
        arr[index] = arr[lastIndex - index]
        arr[lastIndex - index] = temp;
        
    }
    return arr;
}

console.log(reverseArray(array1));
// write a function to reverse(arr) to reverse a an array..

let myString