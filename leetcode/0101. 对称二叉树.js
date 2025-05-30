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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return false;
  const stack = [root.left, root.right];

  while (stack.length) {
    const right = stack.pop();
    const left = stack.pop();

    // 若两个都为 null 合理
    if (left === null && right === null) {
      continue;
    }
    // 如果两个不都为 null 并且不相等，则不对称
    if (left === null || right === null || left.val !== right.val) return false;

    stack.push(left.left);
    stack.push(right.right);
    stack.push(left.right);
    stack.push(right.left);
  }

  return true;
};
