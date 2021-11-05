/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumNumbers = function(root) {
    let sum = 0;
    checkNodes(root, 0, sum)
    return sum;
    
};

// recursive func

var checkNodes = function(root, num, sum){
    if (node === null){
        return
    }
    const currentNumber = num * 10 + root;
    if (root.left === null && root.right === null) {
        sum += currentNumber
    }
    checkNodes(node.right, currentNumber, sum)
    checkNodes(node.left, currentNumber, sum)

}