
//Definition for a binary tree node.
// class TreeNode {
//     val: number = 0;
//     left: TreeNode = null;
//     right: TreeNode = null;
//     constructor(val = 0, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//     }
// }
 

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if(!root){
            return 0;
        }
        else{
            return (1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right)))
        }
    }
}
