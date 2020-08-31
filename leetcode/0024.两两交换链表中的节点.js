/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;
  while (current.next !== null && current.next.next !== null) {
      let first = current.next;
      let second = current.next.next;

      first.next = second.next;
      second.next = first;
      current.next = second;

      current = current.next.next;
  }

  return dummy.next;
};
