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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let result = new ListNode()
        let tracker = result;

        while(list1 !== null && list2 !== null){
            if(list1.val < list2.val){
                tracker.next = list1;
                list1 = list1.next;
            }
            else {
                tracker.next = list2;
                list2 = list2.next;
            }
            tracker = tracker.next;
        }

        if(list1){
            tracker.next = list1;
        }
        if (list2) {
            tracker.next = list2;
        }

        return result.next;
    }
}
