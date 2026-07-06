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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        let result : number[][] = []
        if(root)
            result.push([root.val])
        else
            return result
        let queue : TreeNode[] = [root]
        while (queue.length > 0){
            const size = queue.length;
            let list : number[] = [];
            for(let i = 0; i < size; i++){
                const node = queue.shift();
                if(node.left){
                    if(node.left){
                        list.push(node.left.val)
                        queue.push(node.left)
                    }
                }
                if(node.right){
                    if(node.right){
                        list.push(node.right.val)
                        queue.push(node.right)
                    }
                }
            }
            if(list.length > 0)
                result.push(list);
        }

        return result;
    }
}
