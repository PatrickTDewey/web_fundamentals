class TrieNode {
  constructor(char = "") {
    // each node stores its own character value
    this.character = char;

    // each node has a JS object
    // the keys are characters
    // the values are TrieNodes
    this.children = {};

    // each node has a boolean check to see if its the end of a word
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    // root node represents an empty string
    this.root = new TrieNode();
  }

  /**
   * Adds the given to the Trie.
   * @param {string} word Word that is being added to the Trie
   * @returns {boolean} true/false status of adding the word
   */
   add(word) {
    let chars = word.split("");
    let final = chars[chars.length-1];
    let runner = this.root;

    for (let i = 0; i < chars.length; i++){
        let key = chars[i];
        if (!( key in runner.children)){
            let newNode = new TrieNode(key);
            runner.children = {...runner.childen, key: newNode};
            runner = newNode;
        } else {
            runner = runner.children[key];
        }
        if (i == final){
            newNode.isEndOfWord = true;
        }


    }
    return this;
  }

  print(){
    let pointer = this.root;
    while(Object.keys(pointer.children).length != 0){
      let keys = 
    }
    }
    
  }

  /**
   * Returns an array with any complete words beginning
   * with the given starting substring.
   * - Time: O(?)
   * - Space: O(?)
   * @returns {array} of strings
   */
  autoComplete(startingSubstring) {
    // TIP: separating logic into separate helper functions may help figuring this out and help code readability
  }
}

// let searchHistory = new Trie();
// searchHistory
//   .add("cat")
//   .add("can")
//   .add("candy")
//   .add("crud")
//   .add("apple")
//   .add("a")
//   .add("an")
//   .add("and");
// console.log(searchHistory);

// console.log(searchHistory.autoComplete("a"));
// console.log(searchHistory.autoComplete("ca")); // ["cat", "can", "candy"]
let myTrie = new Trie()
console.log(myTrie.add("cheese"));
myTrie.print()
