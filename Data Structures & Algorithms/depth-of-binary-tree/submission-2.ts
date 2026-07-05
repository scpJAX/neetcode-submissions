
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
        if(!root)
            return 0;
        let depth = 0;
        //bfs search implementation meaning we need a queue that looks at left and right 
        let queue: TreeNode[] = [];
        queue.push(root);
        while (queue.length > 0){
            const size = queue.length;
            for(let i = 0; i < size; i++){
                let node = queue.shift();
                if(node.left)
                    queue.push(node.left)
                if(node.right)
                    queue.push(node.right)
            }
            depth += 1;
        }
        
        return depth;
    }
}
