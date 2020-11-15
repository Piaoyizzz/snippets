/**
 *
 * @param {Array} num 待排序数组
 * @param {*} type
 */
function quickSort(num, type = 0) {
  switch (type) {
    case 0:
      quickSort_0(num, 0, num.length - 1);
      break;
    case 1:
      quickSort_1(num, 0, num.length - 1);
      break;
  }
}

/**
 * 快速排序 递归版本
 * @param {*} num
 * @param {*} left 左指针
 * @param {*} right 右指针
 */
function quickSort_0(num, left, right) {
  if (left >= right) return;

  let i = left;
  let j = right;
  let flag = left; // 基数下标

  // 按照基准下标交换，知道左右指针相遇
  while (i < j) {
    // j在每一轮交换中，移动到num[flag]右侧比它小的数
    while (num[j] >= num[flag] && j > flag) j--;

    // j在改变之后防止碰头
    if (i >= j) break;

    // i在每一轮交换中，移动到num[flag]右侧比它大的数
    while (num[i] <= num[flag] && i < j) i++;

    // 交换
    [num[flag], num[j], num[i]] = [num[j], num[i], num[flag]];

    // 基数更新
    flag = i;
  }

  // 递归调用
  quickSort_0(num, left, flag - 1);
  quickSort_0(num, flag + 1, right);
}

/**
 * 快速排序 递归优化版本
 *
 * 当数据量很大的时候，上述的快速排序会导致执行盏溢出
 * @param {*} num
 * @param {*} left 左指针
 * @param {*} right 右指针
 */
function quickSort_1(num, left, right) {
  const stack = [[left, right]]; // 将[left,right]存入数组中，类似于递归入栈

  while (stack.length) {
    const now = stack.pop(); // 弹出list末尾。(也可用list.shift()取出list第一个数组，但在数据量较大时，这种方式效率较低)

    if (now[0] >= now[1]) continue; // 若左右指针相遇，待排序数组长度小宇1，则无需进行快排(注意不能写成now[0]==now[1]，这里now[0]是有可能大于now[1]的

    let flag = now[0];
    let i = now[0];
    let j = now[1];

    while (i < j) {
      // j在每一轮交换中，移动到num[flag]右侧比它小的数
      while (num[j] >= num[flag] && j > flag) j--;

      // j在改变之后防止碰头
      if (i >= j) break;

      // i在每一轮交换中，移动到num[flag]右侧比它大的数
      while (num[i] <= num[flag] && i < j) i++;

      // 交换
      [num[flag], num[j], num[i]] = [num[j], num[i], num[flag]];

      // 基数更新
      flag = i;
    }

    stack.push([now[0], flag - 1]); // 将flag左边数组作为待排序数组，只需将左右指针放入盏中即可。
    stack.push([flag + 1, now[1]]); // 将flag右边数组作为待排序数组，只需将左右指针放入盏中即可。
  }
}


/**
 * 一般快排
 */
function quickSort_2 (arr) {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort_2(left).concat([pivot], quickSort_2(right));
}

/**
 * Demo
 */
const arr_0 = [9, 17, 0, 6, 10, 5];
const arr_1 = [9, 16, 0, 6, 10, 5];
const arr_2 = [9, 19, 0, 6, 10, 5];

quickSort(arr_0);
console.log(arr_0);

quickSort(arr_1, 1);
console.log(arr_1);

console.log(quickSort_2(arr_2, 2));
