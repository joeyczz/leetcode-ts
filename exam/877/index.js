var stoneGame = function (piles) {
  const pre_sums = piles.reduce(
    (pre, cur, ind) => {
      pre.push(pre[pre.length - 1] + cur);
      return pre;
    },
    [0]
  );

  const len = piles.length;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j < len - i; j++) {
      if (i === 0) {
        dp[i][j] = piles[j];
      } else {
        const _total = pre_sums[i + j + 1] - pre_sums[j];
        const left = _total - dp[i - 1][j + 1];
        const right = _total - dp[i - 1][j];
        dp[i][j] = Math.max(left, right);
      }
    }
  }

  const total = pre_sums[len] - pre_sums[0];

  return dp[len - 1][0] > total / 2;
};

console.time("d");
const result = stoneGame([31, 26, 33, 21, 40]);
// const result = stoneGame([5, 3, 4, 5]);
console.log(result);
console.timeEnd("d");

exports.stoneGame = stoneGame;
