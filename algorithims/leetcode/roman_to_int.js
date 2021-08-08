var romanToInt = function(s) {
    let output = 0;
    let numerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] in numerals) {
            if (s[i] == 'I' && s[i+1] == "V" || s[i] == 'I' && s[i+1] == "X") {
                output += (numerals[s[i+1]] - numerals[s[i]]);
                i++;
            }
            else if (s[i] == 'X' && s[i+1] == "L" || s[i] == 'X' && s[i+1] == "C") {
                output += (numerals[s[i+1]] - numerals[s[i]]);
                i++;
            }
            else if (s[i] == 'C' && s[i+1] == "D" || s[i] == 'C' && s[i+1] == "M") {
                output += (numerals[s[i+1]] - numerals[s[i]]);
                i++;
            }
            else{
                output += numerals[s[i]];
            }
        }
    }
    return output;
};

console.log(romanToInt("MCMXCIV"));