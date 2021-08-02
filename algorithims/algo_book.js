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
let arr0 = [1, 2, 4, 3, 2];
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
    let min = arr[arr.length - 1];
    for (let index = arr.length - 1; index > 0; index--) {
        if (arr[index] < min) {
            min = arr[index];
        }
    }
    return min;
}
// console.log(findMax(arr0));

// Array with odds

function oddsArray(num) {
    let arr = []; img
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
    avg = avg / arr.length;
    console.log(`Max: ${max}, Min: ${min}, Average: ${avg}`);
}
// maxMinAvg(arr1);

// Swap String For Array Negative Values
function swapNegativeForString(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            arr[index] = 'Dojo';
        }
    }
    return arr;
}
// console.log(swapNegativeForString(arr1));


// Print odds 1 - 255
function printOdds(num) {
    for (let index = 1; index <= num; index++) {
        if (index % 2 === 1) {
            console.log(index);
        }
    }
}
// printOdds(255);

// iterate array
function iterateArray(arr) {
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
function squareIndex(arr) {
    let squaredArr = [];
    for (let index = 0; index < arr.length; index++) {
        squaredArr.push(arr[index] * arr[index]);
    }
    return squaredArr;
}
// console.log(squareIndex(arr1));
// console.log(arr1);

// zero out negative numbers
function negativeIndexZeroed(arr) {
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
    let quarter = 25, dime = 10, nickel = 5, penny = 1, change = cents * 100;
    let quarterCount = 0, dimeCount = 0, nickelCount = 0, pennyCount = 0;
    while (change > 0) {
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
    'min': function () {
        let min = this.values[0];
        for (let index = 0; index < this.values.length; index++) {
            if (this.values[index] < min) {
                min = this.values[index];
            }
        }
        return min;
    },
    'max': function () {
        let max = this.values[0];
        for (let index = 0; index < this.values.length; index++) {
            if (this.values[index] > max) {
                max = this.values[index];
            }
        }
        return max;
    },
    'average': function () {
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

var arr2d = [[2, 5, 8],
[3, 6, 1],
[5, 7, 7]];

// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// console.log();
function containsValue(arr, value) {
    let bool = false, count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == 'object') {
            for (let index = 0; index < arr[i].length; index++) {
                console.log(arr[i][index]);
                if (arr[i][index] == value) {
                    count++;
                    bool = true;
                }

            }
        }
    }
    // console.log(bool, count);
}
// console.log(containsValue(arr2d, 7))
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array
function flattenArray(arr) {
    let flattened = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == 'object') {
            for (let index = 0; index < arr[i].length; index++) {
                flattened.push(arr[i][index]);
            }
        }
    }
    return flattened;
}
var result = flattenArray([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
// console.log(result);


let number = 987;
function sumToOne(n) {
    while (n > 9) {
        let sum = 0;
        while (n > 0) {
            r = n % 10;
            n = Math.trunc(n / 10);
            sum += r;
        };
        n = sum;
    }
    return n;
};

function toOneDigit(n) {
    if (n == 0) return 0;
    return (n % 9 == 0) ? 9 : (n % 9);
}
// console.log(toOneDigit(987));
// console.log(321 % 10)
// console.log(sumToOne(number));

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

// Last digit A to the B

// function modulo(a, b) {

//     // inititialize result 
//     let mod = 0;

//     //calculating mod of b with a to make
//     for (let i = 0; i < b.length; i++) {
//         console.log(b[i]);
//         mod = (mod * 10 + b[i] - '0' % a);
//         console.log(mod);
//         // console.log(a);
//     }
//     return mod
// }
// // modulo('2', '120');
// console.log('3' - 0);
// console.log(2**2);
// console.log(1258**4227);
// console.log('123' % 10);
let numA = 3;
let numB = 4;
function divisibleByFour(b) {
    let tothepower = 0;
    if (b % 4 == 0) {
        tothepower = 4;
    } else {
        tothepower = b % 4;
    }
    return tothepower;
}

function lastDigitAtoTheB(a, b) {
    let finalDigit = 0;
    let lastDigitA = a % 10;
    let exponent = divisibleByFour(b);
    finalDigit = ((lastDigitA ** exponent) % 10);
    return finalDigit;
}
// console.log(lastDigitAtoTheB(12, 6));

/*********************** 

raditional clocks are increasingly uncommon, but most can still read rotating hands of hours, minutes, 
and seconds.  
 
Create function ​clockHandAngles(seconds)​ that, given the number of seconds since 12:00:00, will 
print the angles (in degrees) of the hour, minute and second hands. As a quick review, there are 360 
degrees in a full arc rotation. Treat “straight-up” 12:00:00 as 0 degrees for all hands.
 * ****************/
function clockHandAngles(seconds) {
    let degreeSeconds = 0, degreeMinutes = 0, degreeHours = 0;
    degreeSeconds += Math.trunc((6 * (seconds % 60)))
    degreeMinutes += Math.trunc((0.1 * (seconds % 3600)))
    degreeHours += Math.trunc(0.008333333 * (seconds % 43200))
    // console.log(`Second Hand Degree: ${degreeSeconds}\nMinute Hand Degree: ${degreeMinutes}\nHour Hand Degree: ${degreeHours}`);
}
clockHandAngles(4513);

// make acronym out of string
let my_string = 'a random string about strings';
let dash = "There's no free lunch - Gotta pay your way.";
let new_york = 'Live from New York,     It\'s Saturday Night Live!';

function acronym(string) {
    let acroString = '';
    if (string[0] != ' ') {
        acroString += string[0];
    }
    for (let i = 0; i < string.length; i++) {
        if (string[i - 1] == ' ' && string[i] != ' ') {
            // do something
            acroString += string[i];
        }
    }
    return acroString.toUpperCase();
}
// console.log(acronym(my_string));
// console.log(acronym(new_york));
// console.log(acronym(dash));

// given string return reverse of string

let creature = 'creature';
let dog = 'dog';

function reverseString(string) {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];

    }
    return reversed;
}

console.log(reverseString(dog));
console.log(reverseString(creature));

// Brian G, Nick F, Shane S, Hunjin Ryan P, Patrick D

// string characters are immutable the following function will not work the way intended

// function reverse_string(string){
//     for (let i = 0; i < string.length / 2; i++) {
//         let temp = string[i];
//         console.log(temp); 
//         string[i] = string[string.length-1];
//         console.log(string[i]);
//         string[string.length-1] = temp;
//     }
//     return string;
// }
// console.log(reverse_string(dog));
