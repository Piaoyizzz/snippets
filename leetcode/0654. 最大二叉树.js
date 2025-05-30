/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;

  let maxIndex = 0;
  let maxVal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxVal) {
      maxIndex = i;
      maxVal = nums[i];
    }
  }

  const node = new TreeNode(maxVal);
  node.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  node.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));

  return node;
};
