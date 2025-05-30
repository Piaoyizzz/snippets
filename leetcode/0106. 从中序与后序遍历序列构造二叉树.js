/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length) return null;

  // 找到分割点，后序的根节点就是最后的节点
  const rootVal = postorder.pop();
  const divideIndex = inorder.indexOf(rootVal);

  const root = new TreeNode(rootVal);
  root.left = buildTree(
    inorder.slice(0, divideIndex),
    postorder.slice(0, divideIndex)
  );
  root.right = buildTree(
    inorder.slice(divideIndex + 1),
    postorder.slice(divideIndex)
  );
  return root;
};
