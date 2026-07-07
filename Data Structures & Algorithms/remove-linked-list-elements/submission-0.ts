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
        let dummy = new ListNode();
        dummy.next = head;
        let previous = dummy;
        let curr = head;

        while(curr !== null){
            if(curr.val === val){
                //we need to move both previous and current to skip over this node
                previous.next = curr.next;
                curr = curr.next
            }
            else {
                previous = previous.next;
                curr = curr.next
            }
        }  

        return dummy.next;
    }
}
