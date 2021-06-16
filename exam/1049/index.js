var lastStoneWeightII = function (stones) {
  if (stones.length === 0) return 0;
  if (stones.length === 1) return stones[0];

  const total = stones.reduce((t, c) => t + c, 0);
  const half = total / 2;

  const len = stones.length;

  const dp = [];
  for (let i = 0; i < len; i++) {
    const dpLen = dp.length;
    const cur = stones[i];

    for (let j = 0; j < dpLen; j++) {
      const item = dp[j] + cur;
      if (item <= half && !dp.includes(item)) dp.push(item);
    }
    if (cur <= half && !dp.includes(cur)) dp.push(cur);
  }

  const max = Math.max(...dp);

  return 2 * (half - max);
};

console.time("d");
// const result = lastStoneWeightII([31, 26, 33, 21, 40]);
const result = lastStoneWeightII([1, 1, 4, 2, 2]);
// const result = lastStoneWeightII([9, 4, 4, 3, 3, 3, 2]);
// const result = subarraysWithKDistinct(list, 1000);
console.log(result);
console.timeEnd("d");

exports.lastStoneWeightII = lastStoneWeightII;
