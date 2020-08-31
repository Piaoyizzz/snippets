/**
 * 自执行 generator
 */

function asyncToGenerator(generatorFunc) {
  return function() {
    const gen = generatorFunc.apply(this, arguments);

    return new Promise((resolve, reject) => {
      function step(key, arg = null) {
        let generatorResult;

        try {
          generatorResult = gen[key](arg);
        } catch(error) {
          return reject(error);
        }

        const { value, done } = generatorResult;

        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value)
            .then(val => step('next', val), err => step('throw', err));
        }
      }

      step('next');
    })
  }

}
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

let testFunc = asyncToGenerator(helloWorldGenerator);

testFunc().then(data => console.log(data));
