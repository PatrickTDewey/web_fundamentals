function alwaysHungry(arr) {
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            string = arr[i];
            console.log('yummy');
        }
    }
    if (string != 'food') {
        console.log('I\'m always hungry');
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
        
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length
    var count = 0
    // count how many values are greater than the average
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        let backwards = arr.length - 1 - i;
        arr[i] = arr[backwards];
        arr[backwards] = temp;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    if (n != 2) {
        for (let index = 0; index < (n - 2); index++) {
            let temp = fibArr[index + 1];
            fibArr.push((fibArr[index] + temp));
            
        }
        return fibArr;
    } else {
        return 1;
    }
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

