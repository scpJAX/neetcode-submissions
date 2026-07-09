/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head: ListNode | null, val: number): ListNode {
        let result = new ListNode();
        result.next = head;
        let prev = result;
        let curr = head;

        while(curr){
            if(curr.val === val){
                prev.next = curr.next;
                curr = curr.next;
            } 
            else {
                prev = prev.next;
                curr = curr.next;
            }
        }
        
        return result.next;
    }
}
