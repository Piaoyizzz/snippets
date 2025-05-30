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
var minCameraCover = function (root) {
  let result = 0;

  // 未被监控0，监控器1，已经被监控2
  const traversal = (node) => {
    // 假如是空节点的情况下，默认就是被监控的
    if (node === null) {
      return 2;
    }

    // 递归子节点
    let left = traversal(node.left);
    let right = traversal(node.right);

    if (left === 2 && right === 2) {
      return 0;
    }

    if (left === 0 || right === 0) {
      result++;
      return 1;
    }

    if (left === 1 || right === 1) {
      return 2;
    }

    return -1;
  };

  // 看根节点是否在监控之下
  if (traversal(root) === 0) {
    result++;
  }
  return result;
};
