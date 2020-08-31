/**
 * 一个整型数组中，除了 2 个数字之外，其他数字都出现了 2 次。要求找出来这 2 个数字，时间复杂度 O(N)，空间复杂度 O(1)
 * 
 * 因为空间复杂度限制，所以没法用哈希表。
 * 如果只有 1 个数字出现 1 次，那么可以使用“异或”运算，最后的结果就是这个数字。
 * 但题目中有 2 个数字，要考虑分组问题。将这两个数字分到 2 组中，然后再每组内分别异或：

 * 全部异或，最终结果是 2 个数字异或结果
 * 找到结果中第一个 1 出现的位数
 * 按照此位是不是 1，将原数据分成 2 组
 * 组内分别异或
 */

function findFirstBitIsOne (num) {
    let indexBit = 0
    let flag = 1
    
    while (flag && (flag & num) === 0) {
        indexBit++
        flag = flag << 1
    }
    return indexBit
}

function checkIndexBitIsOne (num, index) {
    num = num >> index
    return !!(num & 1)
}

// 主函数
function findNumsAppearOnce (nums) {
    if (!nums) {
        return null
    }

    let orResult = 0
    for (let num of nums) {
        orResult ^= num
    }

    let indexOne = findFirstBitIsOne(orResult)
    let num1 = 0
    let num2 = 0

    for (let num of nums) {
        if (checkIndexBitIsOne(num, indexOne)) {
            num1 ^= num
        } else {
            num2 ^= num
        }
    }
    
    return [num1, num2]
}

/**
 * 测试
 */

console.log(findNumsAppearOnce([2, 4, 3, 6, 3, 2, 5, 5]));