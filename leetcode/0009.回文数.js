/**
 * @param {number} x
 * @return {boolean}
 */

// 内置实现
var isPalindrome = function(x) {
    let s = x.toString()
    return s === s.split('').reverse().join('')
}

// 非内置实现
var _isPalindrome = function (x) {
    // 若为负数则不是回文数
    if (x < 0) return false
    if (x === 0) return true
    if (x % 10 === 0) return false
    var s = x + ''
    var length = s.length
    var half = Math.floor(length / 2)
    for (var i = 0; i < half; i++) {
        if (s[i] !== s[length - 1 - i]) return false
    }
    return true
}