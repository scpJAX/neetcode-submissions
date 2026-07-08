/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        let hashMap = new Map<Node, Node>();
        function dfs(node){
            if(hashMap.has(node))
                return hashMap.get(node);
            
            let copy = new Node(node.val);
            hashMap.set(node, copy);
            for(let neighbor of node.neighbors){
                copy.neighbors.push(dfs(neighbor))
            }
            return copy;
        }

        return node ? dfs(node) : null;
    }
}
