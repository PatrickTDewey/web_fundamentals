// print 1-255
function printUpTo(num) {
    for (let index = 1; index <= num; index++) {
        console.log(index);
    }
}
// printUpTo(255);

// print sum 0 - 255
function printSumTo(num) {
    let sum = 0;
    for (let index = 0; index <= num; index++) {
        sum += index
    }
    return sum;
}
// console.log(printSumTo(255));

// find and print max
let arr0 = [1,2,4,3,2];
function findMax(arr) {
    let max = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];
        }
    }
    return max;
}
function findMin(arr) {
    let min = arr[arr.length-1];
    for (let index = arr.length-1; index > 0; index--) {
        if (arr[index] < min) {
            min = arr[index];
        }
    }
    return min;
}
// console.log(findMax(arr0));

// Array with odds

function oddsArray(num) {
    let arr = [];img
    for (let index = 1; index <= num; index++) {
        if (index % 2 === 1) {
            arr.push(index);
        }        
    }
    return arr;
}
// console.log(oddsArray(255));

// Greater Than Y
let value = 10;
let arr1 = [11, 10, -13, 14, 15, 20, 3, 2, -19];

function greaterThanCount(arr, num) {
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        let temp = arr[index];
        if (temp > num) {
            count++;
        }
    }
    return count;
}
// console.log(greaterThanCount(arr1, value));

function maxMinAvg(arr) {
    let max = findMax(arr), min = findMin(arr), avg = 0;
    for (let index = 0; index < arr.length; index++) {
        avg += arr[index];
    }
    avg = avg/arr.length;
    console.log(`Max: ${max}, Min: ${min}, Average: ${avg}`);
}
// maxMinAvg(arr1);

// Swap String For Array Negative Values
function swapNegativeForString(arr){
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            arr[index]='Dojo';
        }
    }
    return arr;
}
// console.log(swapNegativeForString(arr1));


// Print odds 1 - 255
function printOdds(num){
    for (let index = 1; index <= num; index++) {
        if (index % 2 === 1) {
            console.log(index);
        }
    }
}
// printOdds(255);

// iterate array
function iterateArray(arr){
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        console.log(element);
        
    }
}
// iterateArray(arr0);

// get and print average
function average(arr) {
    let sum = 0, length = arr.length;
    for (let index = 0; index < length; index++) {
        sum += arr[index];
    }
    return sum / length;
} 
// console.log(`Average: ${average(arr0)}`);


// square the values in an array
function squareIndex(arr){
    let squaredArr = [];
    for (let index = 0; index < arr.length; index++) {
        squaredArr.push(arr[index]*arr[index]);
    }
    return squaredArr;
}
// console.log(squareIndex(arr1));
// console.log(arr1);

// zero out negative numbers
function negativeIndexZeroed(arr){
    let noNegArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            noNegArr.push(0);
        } else {
            noNegArr.push(arr[index]);
        }       
    }
    return noNegArr;
}
// console.log(negativeIndexZeroed(arr1));

// shift Array Value
function shiftArray(array) {
    let shiftedArray = []
    for (let index = 1; index < array.length; index++) {
        shiftedArray.push(array[index]);
    }
    shiftedArray.push(0);
    return shiftedArray;
}
// console.log(shiftArray(arr1));

// Implement ​generateCoinChange(cents)​ that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins. Console.log the result.

function generateCoinChange(cents) {
    let quarter = 25, dime = 10, nickel =5, penny = 1, change = cents*100;
    let quarterCount = 0, dimeCount = 0, nickelCount = 0, pennyCount = 0;
    while(change > 0) {
        if (change - quarter >= 0) {
            change -= quarter; 
            quarterCount++;  
            console.log(quarter, change);     
        } else if (change - dime >= 0.00) {
            change -= dime;
            dimeCount++;
            console.log(dime, change);
        } else if (change - nickel >= 0.00) {
            change -= nickel;
            nickelCount++;
            console.log(nickel, change);
        } else if (change - penny >= 0.00) {
            change -= penny;
            pennyCount++;
            console.log(penny, change);
        } else {
            break;
        }
    }
    console.log(`${cents} cents comes out to ${quarterCount} Quarters, ${dimeCount} Dimes, ${nickelCount} Nickels, and ${pennyCount} Pennies.`);

}
// generateCoinChange(.90);

/* 
Statistics to Doubles
Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. Roll a pair of these dice, tracking the statistics until doubles are rolled. Display the​ number of rolls​ ,​min,​ ​max,​ and ​average​.
*/
function die(max) {
    let roll = Math.ceil(Math.random() * max);
    return roll;
}

let stats = {
    'rolls': 1,
    'values': [],
    'min': function() {
        let min = this.values[0];
        for (let index = 0; index < this.values.length; index++) {
            if (this.values[index] < min) {
                min = this.values[index];
            }
        }
        return min;
    },
    'max': function() {
        let max = this.values[0];
        for (let index = 0; index < this.values.length; index++) {
            if (this.values[index] > max) {
                max = this.values[index];
            }
        }
        return max;
    },
    'average': function() {
        let average = 0
        for (let index = 0; index < this.values.length; index++) {
            average += this.values[index][0];
            average += this.values[index][1];
        }
        average = (average / (this.values.length * 2));
        return average;
    }
};

function checkValue(value1, value2) {
    switch (value1 == value2) {
        case true:
            stats.values.push([value1, value2]);
            break;
        case false:
            stats.values.push([value1, value2])
            stats.rolls += 1;
            // console.log(stats.values);
            // console.log(stats.rolls);
            checkValue(die(6), die(6));
            break;
    }
    return stats;
}

let gameOne = checkValue(die(6), die(6));
// console.log(gameOne);
// console.log(`Rolls: ${gameOne.rolls}, Min: ${gameOne.min()}, Max: ${gameOne.max()}, Average: ${gameOne.average()}`);
// console.log('Rolls: ' + gameOne.rolls );

// function customDie(min, max) {
//     Math.floor(Math.random() * (max - min) + min );
// }
// 
// fibonacci sequence
function fib(n) {
    let arr = [0,1];
    for (let i = 0; i < (n - 2); i++) {
        let temp = arr[i + 1];
        arr.push(arr[i] + temp);

    }
    return arr;
}
console.log(fib(12));