var invertTree = function(root) {
    debugger;
    let runner = root;
    if (runner == null) return runner;
    if (runner.left != null){
        invertTree(runner.left)
    }
    if (runner.right != null){
        invertTree(runner.right);
    }
    
    let temp = runner.left
    runner.left = runner.right
    runner.right = temp;
    return runner;
};


class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

let root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));

console.log(invertTree(root));