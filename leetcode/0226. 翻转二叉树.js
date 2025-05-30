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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;

  const queue = [root];
  while (queue.length) {
    const node = queue.shift();

    const t = node.left;
    node.left = node.right;
    node.right = t;

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return root;
};
