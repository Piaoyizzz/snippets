/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  const queue = [];

  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    } else {
      return a[0] - b[0];
    }
  });

  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i]);
  }

  return queue;
};
