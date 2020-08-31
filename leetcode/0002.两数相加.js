/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let p1 = l1
    let p2 = l2
    let carry = 0
    let dummy = new ListNode()
    let pointer = dummy

    while (p1 || p2 || carry) {
        let val1 = p1 ? p1.val : 0
        let val2 = p2 ? p2.val : 0
        let sum = val1 + val2 + carry
        if (sum > 9) {
            pointer.next = new ListNode(sum % 10)
            carry = 1
        } else {
            pointer.next = new ListNode(sum)
            carry = 0
        }
        if (p1) p1 = p1.next
        if (p2) p2 = p2.next
        pointer = pointer.next
    }
    return dummy.next
}