// 比较判断函数，默认是最大堆
const defaultCmp = (x, y) => x > y;

// 交换函数
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

/**
 * 堆
 */
class Heap {
  constructor(cmp = defaultCmp) {
    this.cmp = cmp;
    this.container = [];
  }

  // 插入元素
  insert(num) {
    const { container, cmp } = this;

    // 将元素放到末尾
    container.push(num);
    const len = container.length;
    let index = len - 1;

    // 插入完元素之后要为止堆化
    while (index) {
      const parent = Math.floor((index - 1) / 2);

      if (!cmp(container[index], container[parent])) {
        break;
      }
      swap(container, index, parent);
      index = parent;
    }
  }

  // 抽取堆顶端元素
  extract() {
    const { container, cmp } = this;

    if (!container.length) return null;

    // 将堆顶元素换到末尾，再弹出
    swap(container, 0, container.length - 1);
    const res = container.pop();

    // 维持堆化
    const len = container.length;
    let parent = 0;
    let index = parent * 2 + 1;

    while (index < len) {
      if (index + 1 < len && cmp(container[index + 1], container[index])) {
        index++;
      }

      if (!cmp(container[parent], container[index])) {
        swap(container, parent, index);
        parent = index;
        index = parent * 2 + 1;
      } else {
        break;
      }
    }

    return res;
  }

  // 返回堆顶元素
  top() {
    return this.container.length ? this.container[0] : null;
  }
}
