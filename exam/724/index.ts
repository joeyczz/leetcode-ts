function pivotIndex(nums: number[]): number {
  const total = nums.reduce((v, t) => v + t, 0);
  let index = 0;

  let preTotal = 0;
  let lastTotal = total;
  while (index < nums.length) {
    if (index > 0) {
      preTotal += nums[index - 1];
    }
    lastTotal -= nums[index];

    if (preTotal === lastTotal) {
      break;
    }
    index++;
  }

  return index === nums.length ? -1 : index;
}

(function () {
  console.time("d");
  const result = pivotIndex([1, 2, 3]);
  // const result = pivotIndex([1, 7, 3, 6, 5, 6]);
  console.log(result);
  console.timeEnd("d");
})();
