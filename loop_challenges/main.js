// Print Odds 1-20
for (let index = 1; index <= 20; index++) {
    if (index % 2 === 1) {
        console.log(index);
    }    
}

// Decreasing Multiples of three
for (let index = 100; index >= 1; index--) {
    if (index % 3 === 0) {
        console.log(index);
    }
    
}

// Print the sequence
let array0 = [4, 2.5, 1, -0.5, -2, -3.5];
let length = array0.length;
let i = 0
while (i < length) {
    console.log(array0[i]);
    i++;
}

// Sigma
let sum = 0;
for (let index = 1; index <= 100; index++) {
    sum += index;
}
console.log(sum);

let multiplied = 1;
for (let index = 1; index <= 12; index++) {
    multiplied *= index;
}
console.log(multiplied);
