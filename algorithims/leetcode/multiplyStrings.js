var multiply = function(num1, num2) {
    let arr = [];
    console.log(num2.length)
    for(let i = 0; i < num2.length; i++){
        let zeroCount = i;
        console.log(i)
        let zeros='';
        while(zeroCount > 0){
            zeroCount--;
            zeros += '0';
        }
        console.log(zeros)
        console.log(num2[i])
        
        // let multiplied = parseInt(num2[i] + zeros) * parseInt(num1);
        // arr.push(multiplied);
    }
    console.log(arr)
};

let num1="123456789"
let num2="987654321"

multiply(num1, num2)