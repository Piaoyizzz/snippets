/**
 * 请实现一个函数，输入一个整数，输出该数二进制表示中 1 的个数。
 * 例如把 9 表示成二进制是 1001，有 2 位是 1。因此如果输入 9，该函数输出 2。
 */

// 方法一：直接数位数
function numberOf1 (n) {
    let count = 0
    let flag = 1
    while (flag && flag <= n) {
        if (flag & n) count++

        flag = flag << 1
    } 
    return count
}

console.log(numberOf1(3));

// 方法二：利用 n & (n - 1)
// 运算结果n & (n - 1)可以消除而今中从右向左出现的第一个1。比如二进制数011，减去 1 是010，做与运算的结果就是010。
function numberOf1_ (n) {
    let count = 0
    while (n) {
        count++
        n = n & (n - 1)
    }
    return count
}

console.log(numberOf1_(3))

// 类似的运用 n & (n - 1) 的场景

// 2的整数次方，因为如果2的整数次必然只有一个1
function is2Power (n) {
    if (n <= 0) {
        return '错误' 
    }

    return !(n & (n - 1))
}

// 判断二进制的不同数
function getDiffBytes (a, b) {
    let count = 0 
    let n = a ^ b
    
    while (n) {
        count++
        n = n & (n - 1)
    }
    return count
}

console.log(getDiffBytes(1, 1))
console.log(getDiffBytes(3, 1))