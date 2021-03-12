function minKBitFlips(A: number[], K: number): number {
  let count = 0;
  let i = 0;
  while (i <= A.length - K) {
    if (A[i] === 0) {
      for (let j = i; j < i + K; j++) {
        A[j] = A[j] === 0 ? 1 : 0;
      }
      count++;
    }
    i++;
  }
  for (let i = A.length - K; i < A.length; i++) {
    if (A[i] === 0) return -1;
  }
  return count;
}

(function () {
  console.time("d");
  // const result = minKBitFlips([0, 1, 0], 1);
  // const result = minKBitFlips([1, 1, 0], 2);
  const result = minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3);
  console.log(result);
  console.timeEnd("d");
})();
