// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
let s = "([])"
s = "([{([()])}])"
var isValid = function(s) {
    let stack = [];

    let mapping = {")": "(", "]": "[", "}": "{"};

    for (let i = 0; i < s.length; i++) {
        if (s[i] in mapping) {
            if (stack.length === 0) {
                topElem = '*';
            } else {
                topElem = stack.pop();
            }
            if (mapping[s[i]] != topElem) {
                return false;
            }
            
        }
        else {
            stack.push(s[i]);
        }
        
    }
    console.log(stack);
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
    
}

console.log(isValid(s));

