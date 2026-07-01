/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

public class Solution {
    public bool IsValidBST(TreeNode root) {
        
        bool valid(TreeNode node, int left, int right){  //lower bound left, upperbound right
            if(node == null) return true;   //empty tree still valid

            //handle return false case
            if(node.val >= right || node.val <= left) {
                return false;
            }
            //as we move left we want to update our upper boundary
            //as we move right we update lower boundary
            return (valid(node.left, left, node.val) && valid(node.right, node.val, right));
        }

        return(valid(root, -1001, 1001));
    }
}
