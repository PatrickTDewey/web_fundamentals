// RANDOM  between 1 - 6

function d6() {
    var roll = Math.random();
    roll = Math.ceil(roll * 6); 
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// Consult the Oracle
var lifesAnswers = [
    "It is certain.", // lifesAnswers[0]
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful." //lifesAnswers[lifesAnswers - 1]
];
function askOracle(arr) {
    var randomIndex = arr[Math.floor(Math.random() * arr.length)];
    return randomIndex;
}

console.log(askOracle(lifesAnswers));
// Patrick D, Katelyn M, Jeremy O, John L, Nate L, Hunjin P
// 0 - 0.99999999999

console.log(Math.floor);

var today = new Date()

console.log(today.getDay());