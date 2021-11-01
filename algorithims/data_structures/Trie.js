class TrieNode {
    constructor(char = null){
        // each node stores it's own character value
        this.character = char;
        
        // keep a reference to the parent
        this.parent = null;

        // each node has a JS object
        // the keys are characters
        // the values are TrieNodes
        this.children = {};


        // each node has a boolean check to see if its the end of a word
        this.end = false;

        this.getWord = function() {
            let output = [];
            let node = this;

            while( node !== null) {
                output.unshift(node.character);
                node = node.parent;
            }

            return output.join('');
        };
    };
}
class Trie {
    
    constructor(){
        // root node represents null
        this.root = new TrieNode();
    }

    /**
     * Adds the given word to the Trie.
     * @param {string}  word Word that is being added to the try
     * @returns {boolean} true/false status of adding the word
     */
    insert(word){
        let pointer = this.root;
        for (let index = 0; index < word.length; index++) {
            if (!(word[index] in pointer.children)) {
                let parentNode = pointer;
                let node = new TrieNode(word[index])
                node.parent = parentNode;
                pointer.children[word[index]] = node;
            }
            pointer = pointer.children[word[index]];
            if (index == word.length - 1) {
                pointer.end = true;
            }
        }
        
        return true
    }

    remove(word) {
        return null;
    }

    contains(word) {
        return null;
    }

    find(prefix) {
        return null;
    }

}

let trie = new Trie();
// console.log(trie);
console.log(trie.insert('hey'))
console.log(trie.root.getWord());
console.log(trie.root.children['h'].children['e'].children['y']);
