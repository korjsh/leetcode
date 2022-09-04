/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let pt = head
    let pt2x = head
    while(pt2x !== null && pt2x.next !== null)
    {
        pt = pt.next
        pt2x = pt2x.next.next
    }
    return pt
};