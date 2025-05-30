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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  const stack = [root];
  const curSum = [0];

  while (stack.length) {
    const node = stack.pop();
    const sum = curSum.pop() + node.val;

    // 判断条件：终点，并且值相等
    if (node.left === null && node.right === null && sum === targetSum) {
      return true;
    }

    if (node.left) {
      stack.push(node.left);
      curSum.push(sum);
    }

    if (node.right) {
      stack.push(node.right);
      curSum.push(sum);
    }
  }

  return false;
};
