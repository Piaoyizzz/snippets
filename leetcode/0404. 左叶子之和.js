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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  const getSum = (node) => {
    if (!node) return 0;

    let sum = 0;

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }

    if (node.left) {
      sum += getSum(node.left);
    }

    if (node.right) {
      sum += getSum(node.right);
    }

    return sum;
  };

  return getSum(root);
};
