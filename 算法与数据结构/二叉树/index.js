// 二叉树结点的构造函数
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


/**
 * 遍历二叉树
 * 所有遍历函数的入参都是树的根结点对象
 *
 * @param {*} root
 */

// 递归遍历
function preorder(root) {
  // 递归边界，root 为空
  if(!root) return;

  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)

  // 递归遍历左子树
  preorder(root.left)

  // 放这里就是中序
  // console.log('当前遍历的结点值是：', root.val)

  // 递归遍历右子树
  preorder(root.right)

  // 放这里就是后序
  // console.log('当前遍历的结点值是：', root.val)
}
