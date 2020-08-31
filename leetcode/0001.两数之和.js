/**
 * @param {Number[]} nums 
 * @param {Number} target 
 * @returns {Number[]}
 */

// 暴力法O(n2)
var twoSum = (nums, target) => {
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i]
        for (var j = i + 1; j < nums.length; j++) {
            if (diff === nums[j]) return [i, j]
        }
    }
}

// 用另外一个数组存起来遍历过的元素

var _twoSum = (nums, target) => {
    var temp = []
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i]
        if (temp[diff] !== undefined) {
            return [i, temp[diff]]
        }
        temp[nums[i]] = i
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(_twoSum([2, 7, 11, 15], 9))