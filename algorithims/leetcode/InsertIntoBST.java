/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class InsertIntoBST {
    public static void main(String[] args){
        TreeNode orignalBST = new TreeNode(4, new TreeNode(3),  new TreeNode(6));
        insertIntoBST(orignalBST, 2);
        System.out.println(orignalBST.toString());
    }
    public static TreeNode insertIntoBST(TreeNode root, int val) {
        TreeNode node = new TreeNode(val);
        if(root == null){
            root = node;
        } else {
            insertNode(root, node);
        }
        return root;
    }
    public static void insertNode(TreeNode root, TreeNode node){
        if(root.val < node.val){
            if(root.right == null){
                root.right = node;
            } else {
                insertNode(root.right, node);
            }
        } else {
            if(root.left == null){
                root.left = node;
            } else {
                insertNode(root.left, node);
            }
        }
    }
    public static class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
      TreeNode() {}
      TreeNode(int val) { this.val = val; }
      TreeNode(int val, TreeNode left, TreeNode right) {
          this.val = val;
          this.left = left;
         this.right = right;
      }
    }
    
}