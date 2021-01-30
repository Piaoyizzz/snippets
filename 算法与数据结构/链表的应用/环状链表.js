// LeeCode No.141

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 入参是头结点
const hasCycle = function (head) {
  // 只要结点存在，那么就继续遍历
  while (head) {
    // 如果 flag 已经立过了，那么说明环存在
    if (head.flag) {
      return true;
    } else {
      // 如果 flag 没立过，就立一个 flag 再往下走
      head.flag = true;
      head = head.next;
    }
  }
  return false;
};

// LeeCode No.142
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function(head) {
  while(head){
      if(head.flag){
          return head;
      }else{
          head.flag = true;
          head = head.next;
      }
  }
  return null;
};

/**
 * 快慢指针的思路：
 *
 * 快指针走
 */
