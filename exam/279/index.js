var numSquares = function (n) {
  const f = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let minn = i;
    for (let j = 1; j * j <= i; j++) {
      minn = Math.min(minn, 1 + f[i - j * j]);
    }
    f[i] = minn;
  }
  return f[n];
};

console.time("d");
// const result = numSquares(67);
// const result = numSquares(12);
const result = numSquares(4);
console.log(result);
console.timeEnd("d");

exports.numSquares = numSquares;
