// function spiralOrder(matrix: number[][]): number[] {
//   const i = matrix.length,
//     j = matrix[0].length;

//   return spiralOrderR(matrix, { i: 0, j: 0 }, { i: i - 1, j: j - 1 });
// }

// function spiralOrderR(matrix: number[][], start: any, end: any): number[] {
//   let i0 = start.i;
//   let i1 = end.i;
//   let j0 = start.j;
//   let j1 = end.j;
//   const res = [];

//   let i = i0;
//   let j = j0;
//   while (j <= j1) {
//     res.push(matrix[i][j]);
//     j++;
//   }
//   j = j1;
//   if (i0 === i1) return res;
//   i++;
//   while (i <= i1) {
//     res.push(matrix[i][j]);
//     i++;
//   }
//   i = i1;
//   if (j0 === j1) return res;
//   j--;
//   while (j >= j0) {
//     res.push(matrix[i][j]);
//     j--;
//   }
//   j = j0;
//   i--;
//   while (i > i0) {
//     res.push(matrix[i][j]);
//     i--;
//   }
//   const restN =
//     i0 + 1 <= i1 - 1 && j0 + 1 <= j1 - 1
//       ? spiralOrderR(matrix, { i: i0 + 1, j: j0 + 1 }, { i: i1 - 1, j: j1 - 1 })
//       : [];
//   return [...res, ...restN];
// }

function spiralOrder(matrix: number[][]): number[] {
  let i0 = 0,
    j0 = 0,
    i1 = matrix.length - 1,
    j1 = matrix[0].length - 1;
  const res = [];
  while (i0 <= i1 && j0 <= j1) {
    const ilen = i1 - i0;
    const jlen = j1 - j0;
    let total = 1 + jlen + ilen;
    if (jlen > 0 && ilen > 0) total += jlen + ilen - 1;
    // console.log(total);
    for (let k = 0; k < total; k++) {
      if (k <= jlen) {
        res.push(matrix[i0][j0 + k]);
      } else if (k <= jlen + ilen) {
        res.push(matrix[i0 + k - jlen][j1]);
      } else if (k <= jlen + ilen + jlen) {
        res.push(matrix[i1][j1 - k + jlen + ilen]);
      } else {
        res.push(matrix[i1 - k + jlen + ilen + jlen][j0]);
      }
    }
    i0 += 1;
    j0 += 1;
    i1 -= 1;
    j1 -= 1;
  }
  return res;
}

(function () {
  console.time("d");
  // const result = spiralOrder([[3], [2]]);
  // const result = spiralOrder([
  //   [1, 2],
  //   [3, 4],
  // ]);
  // const result = spiralOrder([
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [7, 8, 9],
  // ]);
  const result = spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ]);
  console.log(result);
  console.timeEnd("d");
})();
