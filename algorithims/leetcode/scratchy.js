// const student = {
//     name: "Zakee",
//     age: 28,
//     classes: [
//         {
//             className: "Literature 101",
//             time: "10:00pm"
//         },
//         {
//             className: "History",
//             time: "1:00pm"
//         },
//         {
//             className: "Movie about Gays",
//             time: "2:00pm"
//         },
//         {
//             className: "I love Asians",
//             time: "4:00pm"
//         },
//         {
//             className: "Coding is Gay",
//             time: "3:00pm"
//         }
//     ]
    
    
// }
// console.log("Student Object:", student);

// student.classes.forEach(item => console.log("Class Name: ", item.className,"\nClass Time: ", item.time));


// // indexOf can only be used for arrays
// let array = ['cheese', 'beans', 'potatos']
// array.indexOf('cheese') // this returns the index of the value 'cheese' which is 0

// Objects do not have indexes
// let myObject = {
//     'cheese': 'gouda',
//     'beans': 'black',
//     'potatos': 'idaho'
// }
// myObject.indexOf('cheese') // this returns typeError myObject.indexOf is not a function since indexOf only works on arrays

// 'i' in the for loop is a variable represnting the index
// lets loop through the array we defined earlier ['cheese', 'beans', 'potatos']
// for (let i = 0; i < array.length; i++) {
//     console.log(i) // 1st iteration: "0" -> 2nd iteration: "1" -> 3rd iteration: "2"
//     console.log(array.indexOf(array[i])) // 1st iteration: "0" -> 2nd iteration: "1" -> 3rd iteration: "2"
//     console.log(array[i]) // 1st iteration:'cheese' -> 2nd iteration: 'beans' -> 3rd iteration: 'potatos'
    
// }

// for (const key in myObject) {
//     console.log(key);
//     console.log(myObject[key]);
// }


// function add(x, y){

//     if (typeof x != 'numer' || typeof y) {
//         return 'Please enter a number for both x and y parameters';
//     }
//     return x + y;
// }

// console.log(add(2,3))

// console.log(add(3, 3))

const joinArrayOfArrays = (array) => {
    let flatArray = []

    for (let i = 0; i < array.length; i++) {
        let count = 0;
        // while(count < array[i].length){
        //     flatArray.push(array[i][count])
        //     count++
        // }
        flatArray = flatArray.concat(array[i])
        
    }
    return flatArray;
}

let twoDimensionalArray = [[1,3], ['true', 'false'], [5,6,7]]
console.log(joinArrayOfArrays(twoDimensionalArray))