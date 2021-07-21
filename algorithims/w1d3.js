let countPositives = 0;
var numbers = [3,4,-2,7,-10,8];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] > 0 ? countPositives++ : countPositives;
    // countPositives++;
    
}
console.log(`there are ` + countPositives + ` positive values` );