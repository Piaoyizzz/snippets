// 堆化
const heapify = (array, i, length) => {
    let temp
    
    for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
        temp = array[i]
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

// 交换数组中的两个值
const swap = (array, i ,j) => {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

// 最小的k个数
const getKthNumbers = (initArr = [], k) => {
    // 先初始化堆
    if (initArr.length === 0) {
        return null
    }

    if (initArr <= 4) {
        return initArr.slice()
    }

    // 先初始化数组，再初始化最大顶堆
    let array = initArr.slice(0, k)
    for (let i = Math.floor((array.length - 1) / 2); i >= 0; i--) {
        heapify(array, i, array.length)
    }

    // 遍历传入的数组，如果元素大于堆顶元素就交换
    for (let i = k; i < initArr.length; i++) {
        if (initArr[i] < array[0]) {
            let temp = initArr[i]
            array[0] = initArr[i]
            initArr[i] = temp

            heapify(array, 0, array.length)
        }
    }

    return array
}

// 测试
console.log(getKthNumbers([4, 5, 1, 6, 2, 7, 3, 8], 4)); // output: [ 4, 3, 1, 2 ]
console.log(getKthNumbers([10, 2], 1)); // output: [ 2 ]