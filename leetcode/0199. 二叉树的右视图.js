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
var rightSideView = function (root) {
  const queue = [root];
  const res = [];

  if (!root) {
    return res;
  }

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (i === len - 1) {
        res.push(node.val);
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res;
};
