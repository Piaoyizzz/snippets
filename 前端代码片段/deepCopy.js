/**
 *  深拷贝实现
 */

function getEmpty(o) {
  if (Object.prototype.toString.call(o) === "[object Object]") {
    return {};
  }
  if (Object.prototype.toString.call(o) === "[object Array]") {
    return [];
  }
  return o;
}

// 广度优先搜索 队列实现
function deepCopyBFS(origin) {
  let queue = [];
  let map = new Map(); // 用于记录环状的数据

  let target = getEmpty(origin);
  if (target !== origin) {
    queue.push([origin, target]);
    map.set(origin, target);
  }

  while (queue.length) {
    let [ori, tar] = queue.shift();
    for (let key in ori) {
      if (map.get(ori[key])) {
        tar[key] = map.get(ori[key]);
        continue;
      }

      tar[key] = getEmpty(ori[key]);
      if (tar[key] !== ori[key]) {
        queue.push([ori[key], tar[key]]);
        map.set(ori[key], tar[key]);
      }
    }
  }

  return target;
}

// 深度优先搜索 栈实现 和 递归实现
function deepCopyDFS(origin) {
  let stack = [];
  let map = new Map();

  let target = getEmpty(origin);
  if (target !== origin) {
    stack.push([origin, target]);
    map.set(origin, target);
  }

  while (stack.length) {
    let [ori, tar] = stack.pop();
    for (let key in ori) {
      if (map.get(ori[key])) {
        tar[key] = map.get(ori[key]);
        continue;
      }

      tar[key] = getEmpty(ori[key]);
      if (tar[key] !== ori[key]) {
        stack.push([ori[key], tar[key]]);
        map.set(ori[key], tar[key]);
      }
    }
  }

  return target;
}

function deepCopyDFS_2(origin) {
  let map = new Map(); // 用于记录环状的数据

  function copy(ori) {
    if (map.get(ori)) {
      return map.get[ori];
    }

    let tar = getEmpty(ori);

    if (tar !== ori) {
      map.set(ori, tar);

      for (let key in ori) {
        tar[key] = copy(ori[key]);
      }
    }

    return tar;
  }

  return copy(origin);
}

// 测试代码

// test
[deepCopyBFS, deepCopyDFS, deepCopyDFS_2].forEach((deepCopy) => {
  console.log(deepCopy({ a: 1 }));
  console.log(deepCopy([1, 2, { a: [3, 4] }]));
  console.log(
    deepCopy(function () {
      return 1;
    })
  );
  console.log(
    deepCopy({
      x: function () {
        return "x";
      },
      val: 3,
      arr: [1, { test: 1 }],
    })
  );

  let circle = {};
  circle.child = circle;
  console.log(deepCopy(circle));
});
