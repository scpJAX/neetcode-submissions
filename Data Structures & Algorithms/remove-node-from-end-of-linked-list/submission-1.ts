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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let slow = head;
        let fast = head;
        for(let i = 0; i <= n; i++){
            //traverse fast n+1 steps 
            if(fast === null && i <= n){
                //we are removing the first node
                return head.next;
            }
            else {
                fast = fast.next
            }
        }

        while(fast !== null){
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;

        return head;
    }
}
