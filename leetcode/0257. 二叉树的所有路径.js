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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];

  const getPath = (node, path) => {
    // 终止条件
    if (!node.left && !node.right) {
      path += node.val;
      res.push(path);
      return;
    }

    path += node.val + "->";
    node.left && getPath(node.left, path);
    node.right && getPath(node.right, path);
  };

  getPath(root, "");
  return res;
};
