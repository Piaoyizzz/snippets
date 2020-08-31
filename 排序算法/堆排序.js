// 堆排序

const heapSort = array => {
    // 初始化最大顶堆，从第一个非叶子节点开始(利用堆是完全二叉树的性质)
    for (let i = Math.floor((array.length - 1) / 2); i >= 0; i--) {
        heapify(array, i, array.length)
    }

    // 排序,顶端的最大值跟数组末尾对调位置,然后数组长度-1,重复这个过程
    for (let i = array.length - 1; i > 0; i--) {
        swap(array, 0, i)

        heapify(array, 0, i) // 最后一位不需要比较
    }

    return array
}

// 交换数组中的两个节点

const swap = (array, i, j) => {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

// 最大堆化
// 将 i 结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：
// 假设结点 i 以下的子堆已经是一个大顶堆，heapify 函数实现的
// 功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。
// 后面将写一个 for 循环，从第一个非叶子结点开始，对每一个非叶子结点
// 都执行 heapify 操作，所以就满足了结点 i 以下的子堆已经是一大顶堆

const heapify = (array, i, length) => {
    let temp // 用于保存父节点的值

    // 将它的子节点做顺序调整，并且将发生变动的子节点递归这个过程，如果不需要调整则退出
    for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
        temp = array[i] // 每次循环取出父节点的值
        if (j + 1 < length && array[j] < array[j + 1]) {
            j++
        }

        if (temp < array[j]) {
            swap(array, i, j)
            i = j
        } else {
            break
        }
    }
}

/**
 * 测试
 */

const array = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2]
console.time('堆排序耗时')
console.log('原始array:', array)
const newArr = heapSort(array)
console.log('newArr:', newArr)
console.timeEnd('堆排序耗时')
