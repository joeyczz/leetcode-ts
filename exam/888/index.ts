function fairCandySwap(A: number[], B: number[]): number[] {
  const aTotal = A.reduce((v, total) => v + total, 0);
  const bTotal = B.reduce((v, total) => v + total, 0);

  const diff = (aTotal - bTotal) / 2;

  const bSet = new Set(B);

  for (let i = 0; i < A.length; i++) {
    const a = A[i];

    if (bSet.has(a - diff)) {
      return [a, a - diff];
    }
  }

  return [];
}

(function () {
  console.time("d");
  const result = fairCandySwap([1, 1], [2, 2]);
  // const result = fairCandySwap([1, 7, 3, 6, 5, 6]);
  console.log(result);
  console.timeEnd("d");
})();
