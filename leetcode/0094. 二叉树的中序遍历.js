/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  const stack = []; // 用来存储访问的节点
  let cur = root;

  while (cur || stack.length) {
    if (cur) {
      // 一直按照最左的元素先访问
      stack.push(cur);
      cur = cur.left;
    } else {
      // 左边的元素到达尽头，说明此时处于栈顶的就是最近的中间节点
      const node = stack.pop();
      res.push(node.val);

      cur = node.right;
    }
  }
  return res;
};
