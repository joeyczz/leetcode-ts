function longestOnes(A: number[], K: number): number {
  let count = 0;
  const len = A.length;

  let left = 0;
  let right = 0;
  let zC = 0;
  while (right < len) {
    while (right < len && (zC < K || A[right] !== 0)) {
      if (A[right] === 0) {
        zC++;
      }
      right++;
    }
    // console.log(left, right, right - left);
    count = Math.max(right - left, count);
    if (A[left] === 0) zC--;
    left++;
  }
  return count;
}

(function () {
  console.time("d");
  // const result = longestOnes([0, 1, 0], 1);
  const result = longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
  // const result = longestOnes(
  //   [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  //   3
  // );
  console.log(result);
  console.timeEnd("d");
})();
