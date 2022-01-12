/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
debugger
 var connect = function(root) {
    if(root === null) {
        return null;
    }
    let pointer = root;
    if(pointer.left != null){
        if(pointer.right != null) {
            let temp = pointer.right
            pointer.right = null
            
            
            
        }
        
    }
    return root;
};

// node based binary tree data structure with the following properties:
// 1. the left subtree of a node contains only nodes with keys lesser than the node's key.
// 2. the right subtree of a node contains only nodes with keys greater than the node's key.
// 3. The left and right subtree each must also be a binary search tree
// example 
/*    8
     / \
    4  10
   / \    \
  1   6    14
       \   /
        7 13
*/

// Node Class
class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// Binary Search tree Class
class BinarySearchTree {
    constructor(){
        // root of binary search tree
        this.root = null;
    }
    
    // insert
    insert(data){
        let node = new Node(data)
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
        return this;
    }
    // insertNode recursive
    insertNode(currentNode, newNode){
        if (currentNode.data < newNode.data) {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else{
                this.insertNode(currentNode.right, newNode);
            }
        }
        else {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.insertNode(currentNode.left, newNode);
            }
        }
    }
    // remove(data)
    remove(data){
        
        this.root = this.removeNode(this.root, data)
    }

    removeNode(node, key){
        if (node === null) {
            return null;
        }
        else if ( node.data < key ){
            node.right = this.removeNode(node.right, key);
            return node;
        }

        else if ( node.data > key ){
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
        }
    }

    printNode(node){
        if (node === null) return null;
        let pointer = node
        console.log(node.data)
        this.printNode(node.left)
        this.printNode(node.right)
        return node;
    }
}

let tree = new BinarySearchTree();


tree.insert(1)
tree.insert(0)
tree.insert(2)
tree.insert(1)
tree.insert(-4)
tree.insert(-5)
tree.insert(6)
console.log(tree);
tree.printNode(tree.root)