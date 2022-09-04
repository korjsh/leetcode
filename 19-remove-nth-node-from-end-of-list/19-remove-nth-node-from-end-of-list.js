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
    let tempList = new ListNode(0);
    tempList.next = head;
    let pt1 = tempList
    let pt2 = tempList
    for (let i=0; i<=n; i++) {
        pt1 = pt1.next
    }
    
    while(pt1) {
        pt1 = pt1.next
        pt2 = pt2.next
    }
    pt2.next = pt2.next.next

    return tempList.next
};