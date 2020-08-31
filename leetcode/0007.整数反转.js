/**
 * @param {number} x
 * @return {number}
 */

// 这道题目和第九题类似
var reverse = function(x) {
    let s = Math.abs(x) + ''
    if (s.length > 10) return false
    
    let reverse = s.split('').reverse().join('')
    if (reverse.length === 10 && reverse > (x < 0 ?"2147483648" : "2147483647")) return false
    
    if (x < 0) {
        return 0 - Number(reverse)
    } else {
        return Number(reverse)
    }
};