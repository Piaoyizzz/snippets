/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 原则上就是，大的尽量满足大的，小的尽量满足小的
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let index = s.length - 1; // 控饼，悠闲喂饱最大的
  let res = 0;

  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      index--;
      res++;
    }
  }

  return res;
};
