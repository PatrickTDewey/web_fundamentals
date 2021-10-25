function sumTwoSmallestNumbers(numbers) {
    //Code here
    // create object that stores two mins
    let minMap = {
        "minOne": null,
        "minTwo": null
    };
    // loop through array one time and get min
    for (let i = 0; i < numbers.length; i++) {
        let temp = numbers[i];
        if (minMap.minOne > numbers[i] || minMap.minOne == null) {
            minMap.minOne = temp;

        }
    }
    // filter numbers array to remove the first min from it
    numbers.splice(numbers.indexOf(minMap.minOne), 1);
    console.log(numbers);
    // loop through a second time to get the second min
    for (let j = 0; j < numbers.length; j++) {
        let temp = numbers[j];
        if (minMap.minTwo > numbers[j] || minMap.minTwo == null) {
            minMap.minTwo = temp
        }
    }
    // return the sum
    return minMap.minOne + minMap.minTwo;
}

let testCase = [5, 8, 12, 19, 22];
let testCase1 = [4, 4]

console.log(sumTwoSmallestNumbers(testCase));