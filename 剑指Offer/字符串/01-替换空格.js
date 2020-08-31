/**
 * 请实现一个函数，把字符串中的每个空格替换成"%20"。
 * 
 * 例如输入“We are happy.”，则输出“We%20are%20happy.”。
 */

function replaceEmpty_1 (str) {
    const reg = / /g
    return str.replace(reg, '%20')
}

function replaceEmpty_2 (str) {
    str = str.split('')
    let conut = 0
    
    for (let i = 0; i < str.length; i++) {
        str[i] === ' ' && conut++
    }
    
    let length = str.length + conut * 2
    let result = Array(length)
    
    let i = 0
    let j = 0
    while (i < result.length) {
        if (str[j] === ' ') {
            result[i++] ='%'
            result[i++] = '2'
            result[i++] = '0'
            j++
        } else {
            result[i++] = str[j++]
        }
    }
    return result.join('')
}

/**
 * 测试代码
 */

console.log(replaceEmpty_1("We are  happy"));
console.log(replaceEmpty_2("We are  happy"));
