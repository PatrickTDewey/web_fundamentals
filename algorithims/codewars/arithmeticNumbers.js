let zero = (operation) => operation ? Math.trunc(eval("0" + operation)) : '0';
let one = (operation) => operation ? Math.trunc(eval("1" + operation)) : '1';
let two = (operation) => operation ? Math.trunc(eval("2" + operation)) : '2';
let three = (operation) => operation ? Math.trunc(eval("3" + operation)) : '3';
let four = (operation) => operation ? Math.trunc(eval("4" + operation)) : '4';
let five = (operation) => operation ? Math.trunc(eval("5" + operation)) : '5';
let six = (operation) => operation ? Math.trunc(eval("6" + operation)) : '6';
let seven = (operation) => operation ? Math.trunc(eval("7" + operation)): '7';
let eight = (operation) => operation ? Math.trunc(eval("8" + operation)) :'8';
let nine = (operation) => operation ? Math.trunc(eval("9" + operation)) : '9';
let times = (number) => `* ${number}`
let plus = (number) => `+ ${number}`
let minus = (number) => `- ${number}`
let dividedBy = (number) => `/ ${number}`
console.log(two(times(four())));