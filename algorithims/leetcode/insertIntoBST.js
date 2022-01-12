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
 * @param {number} val
 * @return {TreeNode}
 */
 var insertIntoBST = function(root, val) {
    let node = new TreeNode(val, null, null);
    console.log("Node:", node)
    if(root == null){
        root = node;
    } else {
        insertNode(root, node)
    }
    return root
};
var insertNode = function(root, node) {
    if (root.val < node.val){
        if(root.right === null){
            console.log(true)
            root.right = node
            
        } else {
            console.log("right recursive")
            insertNode(root.right, node);
        }
    } else {
        if(root.left === null){
            console.log(true)
            console.log(root)
            root.left = node
            console.log(root.left)
            
        } else {
            console.log("left recursive")
            insertNode(root.left, node)
        }
    }
}