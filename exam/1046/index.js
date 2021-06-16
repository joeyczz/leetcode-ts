const { PriorityQueue } = require("../utils/index-priority.js");

var lastStoneWeight = function (stones) {
  const queue = new PriorityQueue({
    // initial: stones,
    priorityFn: (a, b) => a > b,
  });

  for (let i = 0; i < stones.length; i++) {
    queue.add(stones[i]);
  }

  while (!queue.isEmpty()) {
    const fir = queue.pool();
    if (queue.isEmpty()) {
      return fir;
    }
    const sec = queue.pool();
    fir - sec > 0 && queue.add(fir - sec);
  }
  return 0;
};

console.time("d");
const result = lastStoneWeight([2, 2]);
// const result = lastStoneWeight([31, 26, 33, 21, 40]);
// const result = subarraysWithKDistinct(list, 1000);
console.log(result);
console.timeEnd("d");

exports.lastStoneWeight = lastStoneWeight;
