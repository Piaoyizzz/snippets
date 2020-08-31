/**
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 例如输入字符串 abc，则打印出由字符 a、b、c 所能排列出来的所有字符串 abc、acb、bac、bca、cab 和 cba
 */


/**
 * 交换数组指定坐标的2个元素
 * @param {Array} arr
 * @param {Number} i
 * @param {Number} j
 */
function swap (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 * 去重
 * 
 * 检测arr[start, end)中, 是否有和arr[end]相等的元素
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} end
 */
function check (arr, start, end) {
    for (let i = start; i < end; i++ ) {
        if (arr[end] === arr[i]) return false
    }
    return true
}

/**
 * 全排列
 * @param {Array} arr 元素集合
 * @param {Number} n 起始位置
 */
function perm (arr = [], n = 0 ) {
    const length = arr.length
    if (length === n) {
        console.log(arr.join(' '))
        return
    }

    for (let i = n; i < length; i++) {
        if (!check(arr, n, i)) continue
        swap(arr, n, i)
        perm(arr, n + 1)
        swap(arr, n, i)
    }
}

/**
 * 测试代码
 */
perm(["a", "b", "c"], 0);
console.log("*".repeat(8));
perm(["a", "b", "b"], 0);