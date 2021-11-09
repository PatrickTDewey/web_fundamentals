const findNumOfValidWords = (words, puzzles) => {
   
    let map = {}, output = []
    for (let i = 0; i < words.length; i++) {
        let mask = 0;
        for (let j = 0; j < words[i].length; j++) {
            // console.log(words[i].charCodeAt(j));
            // console.log('a'.charCodeAt(0));
            mask |= 1<< words[i].charCodeAt(j) - 'a'.charCodeAt(0)
        }
        map[mask] ? map[mask] += 1 : map[mask] = 1;
    }
     //  recursive function
    //  function generateSubSequences(index, mask, puzzle) {
    //     console.log(puzzle);
    //     if(index === 7){
    //         if (mask in map) {
    //             return map[mask];
    //         }
    //         return 0;
    //     }
    //     let temp = 0;
    //     temp += generateSubSequences(index+1, mask, puzzle)
    //     temp += generateSubSequences(index+1, mask | 1<< puzzle.charCodeAt(index) - 'a'.charCodeAt(0))
    //     return temp;
    // }
    // console.log(map);
    for (let k = 0; k < puzzles.length; k++) {
        output.push(0)
        let currentMask = 0;
        for (let l = 0; l < puzzles[k].length; l++) {
            currentMask |= 1 << puzzles[k].charCodeAt(l) - 'a'.charCodeAt(0)
            
        }
        const firstChar = 1 << puzzles[k].charCodeAt(0) - 'a'.charCodeAt(0)

        let start = currentMask
        while(start > 0){
            if ((start & firstChar) === firstChar && map.hasOwnProperty(start)){
                output[k] += map[start];
            }
            start = (start - 1) & currentMask
        }
        
        
    }
    
    return output

}

//  recursive function
const generateSubSequences = (index, mask) => {
    if(index === 7){
        if (mask) {
            
        }
    }
}
let words = ["aaaa","asas","able","ability","actt","actor","access"], puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"];
console.log(findNumOfValidWords(words, puzzles));
console.log('b'.charCodeAt(0));
console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0) - 'a'.charCodeAt(0))
