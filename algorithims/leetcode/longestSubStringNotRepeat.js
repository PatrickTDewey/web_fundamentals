/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    
    let count = 0;
    debugger;
    while(count < s.length){
        
        let string = '';

        string += s[count];
        
        for(let i = count + 1; i < s.length; i++){
            if( !string.includes(s[i] ) ) {
                string += s[i];
            } else {
                break;
            }
        }
        
        maxLength > string.length ? maxLength : maxLength = string.length;
        count++;
    }
    
    return maxLength;
};

let testOne = "pwwkew";
console.log(lengthOfLongestSubstring(testOne));

/**
 * @param {string} s
 * @return {number}
 */
//  const lengthOfLongestSubstring = (s) => {
//     //input = string
//     //output = number
//     //'abcabcbb' => 3
//     //'pwwkew' => 3
//     //'' => 0
//     //The only time you ouput zero is when the input is an empty string

//     //Create two variables
//       //currtString = ''
//       //longestString = ''
    
//     //Loop through the string, and focus on 1 letter at a time 
//       //letter = s[i]
//     //If the letter is not already in the current string, then add it to the current string (use indexOf to search currString)
//     //If the letter IS already in the current string
//       //Check if currString is longer than longestString and, if so, longestString = currString
//       //Slice the currString from the current index + 1, and add the current letter
    
//     //Outside of the loop, if currString is longer than longestString, then longestString = currentString
//     //Lastly, return longestString.length

//     let currString = ''
//     let longestString = ''

//     for(let i = 0; i < s.length; i++) {
//         let letter = s[i]
//         let index = currString.indexOf(letter)
        
//         if(currString.indexOf(letter) === -1) {
//             currString += letter
//         } else {
//             debugger
//             if(currString.length > longestString.length) {
//                 longestString = currString
//             }
//             currString = currString.slice(currString.indexOf(letter)  + 1) + letter
//         }
//     }
//     if(currString.length > longestString.length) {
//         longestString = currString
//     }
//     return longestString.length
// }

// let testOne = "dvdf";
// lengthOfLongestSubstring(testOne);