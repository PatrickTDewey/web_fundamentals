/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    let answers = [];
    for(let i = 0; i< puzzles.length; i++){
        let puzzle = puzzles[i];
        let numOfMatches = 0;
        for(let j = 0; j < words.length; j++){
            let index = 0
            debugger
            while(index < words[j].length){
                if(words[j].indexOf(puzzle[0]) === -1){
                    break;
                }
                if(puzzle.indexOf(words[j][index]) === -1){
                    break;
                }
                if(index === words[j].length - 1 && puzzle.indexOf(words[j][index]) != -1){
                    numOfMatches++;
                }
                index++;
            }
        }
        answers.push(numOfMatches);
    }
    return answers
    
};
let words = ["aaaa","asas","able","ability","actt","actor","access"], puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"];
console.log(findNumOfValidWords(words, puzzles));
let words1 = ["apple","pleas","please"], puzzles1 = ["aelwxyz","aelpxyz","aelpsxy","saelpxy","xaelpsy"]
console.log(findNumOfValidWords(words1, puzzles1));