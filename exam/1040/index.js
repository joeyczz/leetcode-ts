// function maxStoneGameII(piles, m = 1) {
//   if (piles.length <= 2 * m) {
//     const t = piles.reduce((t, c) => t + c, 0);
//     return [t, piles.length];
//   }
//   let maxT = 0;
//   let total = 0;
//   let index = 0;
//   for (let i = 0; i < 2 * m; i++) {
//     total += piles[i];

//     let [, oI] = maxStoneGameII(piles.slice(i + 1), Math.max(m, i + 1));

//     const m2 = Math.max(m, oI, i + 1);
//     const [nexT] = maxStoneGameII(piles.slice(i + oI + 1), m2);

//     const curT = total + nexT;
//     maxT = Math.max(maxT, curT);
//     if (curT === maxT) index = i;
//   }
//   return [maxT, index + 1];
// }

var stoneGameII = function (piles) {
  const len = piles.length;

  // 后缀和
  const post_sum = [];
  for (let i = len - 1; i >= 0; i--) {
    const a = piles[i] + (post_sum[0] || 0);
    post_sum.unshift(a);
  }

  const dp = new Array(len + 1);
  dp[len] = new Array(len).fill(0);

  for (let i = len - 1; i >= 0; i--) {
    dp[i] = new Array(len).fill(0);
    for (let m = 1; m <= len; m++) {
      if (2 * m >= len - i) {
        dp[i][m] = post_sum[i];
      } else {
        for (let k = 1; k <= 2 * m; k++) {
          dp[i][m] = Math.max(
            dp[i][m],
            post_sum[i] - dp[i + k][Math.max(m, k)]
          );
        }
      }
    }
  }
  return dp[0][1];
};

console.time("d");
// [86, 11, 7, 6, 46, 37, 72, 67, 33, 25, 54, 45];
// const result = stoneGameII([25, 54, 45]);
// const result = stoneGameII([86, 11, 7, 6, 46, 37, 72, 67, 33, 25, 54, 45]);
// const result = stoneGameII([2, 7, 9, 4, 4]);
// const result = stoneGameII([1, 2, 3, 4, 5, 100]);
// const result = stoneGameII([31, 26, 33, 21, 40]);
// const result = stoneGameII(list, 1000);
console.log("result => ", result);
console.timeEnd("d");

exports.stoneGameII = stoneGameII;
