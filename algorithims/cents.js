// function generateCoinChange(cents) {
//     let quarter = 25, dime = 10, nickel = 5, penny = 1, change = cents;
//     let quarterCount = 0, dimeCount = 0, nickelCount = 0, pennyCount = 0;
//     while (change > 0) {
//         if (change - quarter >= 0) {
//             change -= quarter;
//             quarterCount++;
//             console.log(quarter, change);
//         } else if (change - dime >= 0.00) {
//             change -= dime;
//             dimeCount++;
//             console.log(dime, change);
//         } else if (change - nickel >= 0.00) {
//             change -= nickel;
//             nickelCount++;
//             console.log(nickel, change);
//         } else if (change - penny >= 0.00) {
//             change -= penny;
//             pennyCount++;
//             console.log(penny, change);
//         } else {
//             break;
//         }
//     }
//     console.log(`${cents} cents comes out to ${quarterCount} Quarters, ${dimeCount} Dimes, ${nickelCount} Nickels, and ${pennyCount} Pennies.`);
// }
// generateCoinChange(178);

function generateCoingChangeObject(cents) {
    let changeDict = {}, quarter = 25, dime = 10, nickle = 5, penny = 1

    changeDict['quarters'] = Math.floor(cents / quarter);
    cents %= quarter;
    changeDict['dime'] = Math.floor(dime / quarter);
    cents %= dime;
    changeDict['nickle'] = Math.floor(nickle / quarter);
    cents %= nickle;
    changeDict['pennies'] = cents;
    return changeDict;

    
}
console.log(generateCoingChangeObject(173))


