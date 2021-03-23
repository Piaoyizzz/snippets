// LeetCode No.144

/**
 * DFS “可栈可递归” 下面主要说迭代实现
 * BFS “队列”
 */

// 二叉树前序遍历
var preorderTraversal = function (root) {
  if (!root) return [];

  const res = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);

    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }

  return res;
};

// LeetCode No.145
// 二叉树后序遍历
var postorderTraversal = function (root) {
  if (!root) return [];

  const res = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    res.unshift(node.val);

    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }

  return res;
};

// LeetCode No.94
// 二叉树中序遍历
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let cur = root;

  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      const node = stack.pop();
      res.push(node.val);
      cur = node.right;
    }
  }

  return res;
};

// LeetCode No.102
// 二叉树的层级遍历 BFS
const levelOrder = function (root) {
  // 初始化结果数组
  const res = [];
  // 处理边界条件
  if (!root) {
    return res;
  }
  // 初始化队列
  const queue = [];
  // 队列第一个元素是根结点
  queue.push(root);

  // 当队列不为空时，反复执行以下逻辑
  while (queue.length) {
    // level 用来存储当前层的结点
    const level = [];
    // 缓存刚进入循环时的队列长度，这一步很关键，因为队列长度后面会发生改变
    const len = queue.length;
    // 循环遍历当前层级的结点
    for (let i = 0; i < len; i++) {
      // 取出队列的头部元素
      const top = queue.shift();
      // 将头部元素的值推入 level 数组
      level.push(top.val);
      // 如果当前结点有左孩子，则推入下一层级
      if (top.left) {
        queue.push(top.left);
      }
      // 如果当前结点有右孩子，则推入下一层级
      if (top.right) {
        queue.push(top.right);
      }
    }
    // 将 level 推入结果数组
    res.push(level);
  }
  // 返回结果数组
  return res;
};

// LeetCode No.226
// 翻转二叉树

// 递归实现
var _invertTree = function (root) {
  if (!root) return root;

  _invertTree(root.left);
  _invertTree(root.right);

  [root.left, root.right] = [root.right, root.left];

  return root;
};

// 迭代 模型是 BFS
var invertTree = function (root) {
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node) {
        [node.left, node.right] = [node.right, node.left];
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
  }
  return root;
};
