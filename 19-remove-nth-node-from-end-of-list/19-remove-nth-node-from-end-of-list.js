/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let pt1 = head
    let pt2 = new ListNode()
    pt2.next = head
    for (let i=0; i<n; i++) {
        pt1 = pt1.next
    }
    if(pt1 === null) return head.next
    
    while(pt1) {
        pt1 = pt1.next
        pt2 = pt2.next
    }
    pt2.next = pt2.next.next

    return head
};