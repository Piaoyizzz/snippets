/**
 * 实现sleep函数
 */

// Promise
const sleep = time => {
    return new Promise(resolve => setTimeout(resolve, time))
}

sleep(1000).then(() => {

})

// Generator
function* sleepGenerator (time) {
    yield new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

sleepGenerator(1000).next().value.then(() => {
    
})

// async
function sleep (time) {
    return new Promise(resolve => setTimeout(resolve, time))
}
async function output () {
    let out = await sleep(1000)
    // do something
    return out
}
output()

// ES5
function sleep (callback, time) {
    if (typeof callback === 'function') {
        setTimeout(callback, time)
    }
}

function output () {
    
}

sleep()