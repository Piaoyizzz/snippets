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
var findBottomLeftValue = function (root) {
  let depth = 0;
  let result = null;

  const dfsTree = (node, curDepth) => {
    if (node.left === null && node.right === null) {
      if (curDepth > depth) {
        depth = curDepth;
        result = node.val;
      }
    }

    // 继续递归，为了保证最左边必须是最左边进入
    node.left && dfsTree(node.left, curDepth + 1);
    node.right && dfsTree(node.right, curDepth + 1);
  };

  dfsTree(root, 1);
  return result;
};
