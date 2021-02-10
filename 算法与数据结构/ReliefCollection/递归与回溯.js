// LeetCode No.46 （全排列问题）

/**
 * 看起来需要 “穷举” 的场景，排列出来的各种情况都是树结构（例如走迷宫的各种路径组合），所以需要递归把 “树” 的节点遍历完毕
 *
 * 思维惯性：
 *  以后只要分析出重复的逻辑（排除掉类似数组遍历这种简单粗暴的重复），你都需要把 “递归” 从你的大脑内存里调度出来、将其列为“可以一试”的解法之一；
 *  只要想到递归，立刻回忆我们 DFS 思想。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 入参是一个数组
const permute = function (nums) {
  // 缓存数组的长度
  const len = nums.length;
  // curr 变量用来记录当前的排列内容
  const curr = [];
  // res 用来记录所有的排列顺序
  const res = [];
  // visited 用来避免重复使用同一个数字
  const visited = {};
  // 定义 dfs 函数，入参是坑位的索引（从 0 计数）
  function dfs(nth) {
    // 若遍历到了不存在的坑位（第 len+1 个），则触碰递归边界返回
    if (nth === len) {
      // 此时前 len 个坑位已经填满，将对应的排列记录下来
      res.push(curr.slice());
      return;
    }
    // 检查手里剩下的数字有哪些
    for (let i = 0; i < len; i++) {
      // 若 nums[i] 之前没被其它坑位用过，则可以理解为“这个数字剩下了”
      if (!visited[nums[i]]) {
        // 给 nums[i] 打个“已用过”的标
        visited[nums[i]] = 1;
        // 将nums[i]推入当前排列
        curr.push(nums[i]);
        // 基于这个排列继续往下一个坑走去
        dfs(nth + 1);
        // nums[i]让出当前坑位
        curr.pop();
        // 下掉“已用过”标识
        visited[nums[i]] = 0;
      }
    }
  }
  // 从索引为 0 的坑位（也就是第一个坑位）开始 dfs
  dfs(0);
  return res;
};

// LeetCode No.78

/**
 * 存在或不存在对应树的两个分叉，所以该类题目找到构建树的方法很关键
 */

// push 后置
var subsets_1 = function (nums) {
  const len = nums.length;
  const res = [];

  function DFS(index, stack) {
    if (index === len) {
      res.push(stack.slice());
      return;
    }

    stack.push(nums[index]);
    DFS(index + 1, stack);
    stack.pop();
    DFS(index + 1, stack);
  }

  DFS(0, []);

  return res;
};

// push 前置
var subsets = function (nums) {
  const len = nums.length;
  const res = [];

  function DFS(index, stack) {
    res.push(stack.slice());

    for (let i = index; i < len; i++) {
      stack.push(nums[i]);
      DFS(i + 1, stack);
      stack.pop();
    }
  }

  DFS(0, []);

  return res;
};

// LeetCode No.77

/**
 * 有时我们会去掉全排列中一些不符合题目要求的、没有作用的答案，进而得到正确答案。这个丢掉答案的过程，形似剪掉树的枝叶，所以这一方法被称为“剪枝”。
 */

var combine = function (n, k) {
  const res = [];

  function DFS(nth, stack) {
    if (stack.length === k) {
      res.push(stack.slice());
      return;
    }

    for (let i = nth; i <= n; i++) {
      stack.push(i);
      DFS(i + 1, stack);
      stack.pop();
    }
  }

  DFS(1, []);

  return res;
};


/**
 * 答题模版
 *
 * function xxx(入参) {
 * 前期的变量定义、缓存等准备工作
 *
 *  定义路径栈
 *  const path = [];
 *
 *  进入 dfs
 *  dfs(起点);
 *
 *  // 定义 dfs
 *  dfs(args) {
 *    if(到达了递归边界) {
 *      // 结合题意处理边界逻辑，往往和 path 内容有关
 *      return;
 *    }
 *
 *    // 注意这里也可能不是 for，视题意决定
 *    for(遍历坑位的可选值; ;) {
 *      path.push(当前选中值)
 *      处理坑位本身的相关逻辑
 *      path.pop()
 *    }
 *  }
 *}
 */
