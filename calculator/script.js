let number = document.querySelector('#display');
let myNum = '';
numberArr = [];
let myOp;

function press(num) {
    // console.log(num);
    myNum += num;
    number.innerText = myNum;
}

function setOP(operator) {
    numberArr.push(myNum);
    console.log(numberArr);
    myOp = operator;
    console.log(myOp);
    myNum = '';
}

function calculate() {
    numberArr.push(myNum);
    console.log(numberArr);
    switch (myOp) {
        case '+':
            let sum = 0;
            sum += Number(numberArr[0]) + Number(numberArr[1]);
            console.log(sum);
            for (let i = 0; i <= numberArr.length; i++) {
                numberArr.pop();
            }
            myNum = sum;
            number.innerText = myNum;
            console.log(numberArr);
            break;
        case '-':
            let total = 0;
            total += Number(numberArr[0]) - Number(numberArr[1]);
            console.log(total);
            for (let i = 0; i <= numberArr.length; i++) {
                numberArr.pop();
                
            }
            myNum = total;
            number.innerText = myNum;
            console.log(numberArr);
            break;
        case '/':
            let div = 0;
            div += Number(numberArr[0]) / Number(numberArr[1]);
            for (let i = 0; i <= numberArr.length; i++) {
                numberArr.pop();
                
            }
            myNum = div;
            number.innerText = myNum;
            console.log(numberArr);
            break;
        case '*':
            let mult = 0;
            mult += Number(numberArr[0]) * Number(numberArr[1]);
            for (let i = 0; i <= numberArr.length; i++) {
                numberArr.pop();
                
            }
            myNum = mult;
            number.innerText = myNum;
            console.log(numberArr);
            break;
        default:
            break;
    }
};

function clr() {
    myNum = '';
    numberArr = []
    number.innerText = 0;
};