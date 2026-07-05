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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if (!root)
            return null;
        let queue : TreeNode[] = [root];
        while(queue.length > 0 ) {
            const size = queue.length;
            for(let i = 0; i < size; i++){
                const node = queue.shift();
                
                if(node.left === null && node.right !== null){
                    node.left = node.right;
                    node.right = null;
                    queue.push(node.left);
                }
                else if(node.right === null && node.left !== null){
                    node.right = node.left;
                    node.left = null;
                    queue.push(node.right);
                }
                else if(node.left !== null && node.right !== null){
                    let temp = node.left;
                    node.left = node.right;
                    node.right = temp;
                    queue.push(node.left);
                    queue.push(node.right);
                }
            }
        }
        return root;
    }
}
