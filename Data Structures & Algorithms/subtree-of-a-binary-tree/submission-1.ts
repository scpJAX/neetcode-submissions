/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {

    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        function sameTree(root: TreeNode | null, subRoot: TreeNode | null) : boolean {
            if(root === null && subRoot === null){
                return true;
            }
            else if((root !== null && subRoot === null) 
                || (root === null && subRoot !== null) 
                || (root.val !== subRoot.val))
            {
                return false;
            }
            else {
                return sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right);
            }
        }

        function traverseTree(root: TreeNode | null, subRoot: TreeNode | null) {
            if(root === null) {
                return false;
            } 
            else if (sameTree(root, subRoot)){
                return true;   
            }else {
                return traverseTree(root.left, subRoot) || traverseTree(root.right, subRoot);
            }
        }

        return traverseTree(root, subRoot);
    }
}
