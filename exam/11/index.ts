function maxArea(height: number[]): number {
  let i = 0;
  let j = height.length - 1;
  let max = 0;

  while (i < j) {
    const h = Math.min(height[i], height[j]);
    max = Math.max(max, h * (j - i));
    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
}

(function () {
  console.time("d");
  const result = maxArea([1, 2, 3, 8, 9, 6, 4, 4, 5, 3, 3, 7, 1]);
  console.log(result);
  console.timeEnd("d");
})();
