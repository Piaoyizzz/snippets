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
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let slow = head.next;
  let fast = head.next.next;

  // 让快慢节点相遇
  while (fast && fast.next && slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 排除空指针的情况
  if (!fast || !fast.next) return null;

  slow = head;
  while (slow !== fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
