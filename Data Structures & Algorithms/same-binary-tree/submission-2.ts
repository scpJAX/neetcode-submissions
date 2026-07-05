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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if(p === null && q === null){
            return true; //we've hit the end of the
        }
        else if ((p === null && q !== null) || (p !== null && q === null)){
            return false; //not same structure
        }
        else {
            if( p.val !== q.val){
                return false;
            }
            else {
                return (this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right));
            }
        }
    }
}
