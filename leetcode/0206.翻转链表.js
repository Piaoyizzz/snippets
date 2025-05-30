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
var reverseList = function (head) {
  let temp = null;
  let pre = null;
  let cur = head;

  while (cur) {
    // 暂存下一个节点
    temp = cur.next;
    // 进行节点指针的交换
    cur.next = pre;

    // 重置 pre cur
    pre = cur;
    cur = temp;
  }

  return pre;
};
