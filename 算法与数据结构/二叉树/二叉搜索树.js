/**
 * 特点：二叉搜索树的中序遍历序列是有序的！
 *
 */

// LeetCode No.701

// 二叉搜索树的插入
var insertIntoBST = function (root, val) {
  if (!root) {
    const node = new TreeNode(val);
    return node;
  }

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
};

// LeetCode No.450

// 二叉搜索树的删除 （递归方法 & 迭代方法）

function deleteNode(root, n) {
  // 如果没找到目标结点，则直接返回
  if (!root) {
    return root;
  }
  // 定位到目标结点，开始分情况处理删除动作
  if (root.val === n) {
    // 若是叶子结点，则不需要想太多，直接删除
    if (!root.left && !root.right) {
      root = null;
    } else if (root.left) {
      // 寻找左子树里值最大的结点
      const maxLeft = findMax(root.left);
      // 用这个 maxLeft 覆盖掉需要删除的当前结点
      root.val = maxLeft.val;
      // 覆盖动作会消耗掉原有的 maxLeft 结点
      root.left = deleteNode(root.left, maxLeft.val);
    } else {
      // 寻找右子树里值最小的结点
      const minRight = findMin(root.right);
      // 用这个 minRight 覆盖掉需要删除的当前结点
      root.val = minRight.val;
      // 覆盖动作会消耗掉原有的 minRight 结点
      root.right = deleteNode(root.right, minRight.val);
    }
  } else if (root.val > n) {
    // 若当前结点的值比 n 大，则在左子树中继续寻找目标结点
    root.left = deleteNode(root.left, n);
  } else {
    // 若当前结点的值比 n 小，则在右子树中继续寻找目标结点
    root.right = deleteNode(root.right, n);
  }
  return root;
}

// 寻找左子树最大值
function findMax(root) {
  while (root.right) {
    root = root.right;
  }
  return root;
}

// 寻找右子树的最小值
function findMin(root) {
  while (root.left) {
    root = root.left;
  }
  return root;
}

var _deleteNode = function (root, key) {
  if (!root) return root;
  if (root.val === key) return mergeTree(root);

  let curr = root;
  let parent = null;
  let child = "";
  while (curr && curr.val !== key) {
    parent = curr;
    child = curr.val > key ? "left" : "right";
    curr = curr[child];
  }

  // 处理空节点的情况
  if (!curr) return root;
  parent[child] = mergeTree(curr);

  return root;
};

function mergeTree(root) {
  if (!root.left && !root.right) return null;
  if (!root.left && root.right) return root.right;
  if (root.left && !root.right) return root.left;
  let curr = root.right;
  while (curr.left) curr = curr.left;
  curr.left = root.left;
  return root.right;
}

// LeetCode No.98 判断二叉搜索树
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
  // 定义递归函数
  function dfs(root, minValue, maxValue) {
    // 若是空树，则合法
    if (!root) {
      return true;
    }
    // 若右孩子不大于根结点值，或者左孩子不小于根结点值，则不合法
    if (root.val <= minValue || root.val >= maxValue) return false;
    // 左右子树必须都符合二叉搜索树的数据域大小关系
    return (
      dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
    );
  }
  // 初始化最小值和最大值为极小或极大
  return dfs(root, -Infinity, Infinity);
};

// LeetCode No.108 从中序排列构建二叉搜索树
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  function buildBST(low, high) {
    if (low > high) return null;

    const mid = Math.floor(low + (high - low) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = buildBST(low, mid - 1);
    node.right = buildBST(mid + 1, high);

    return node;
  }

  return buildBST(0, nums.length - 1);
};
