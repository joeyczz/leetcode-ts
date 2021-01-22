function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);

  let best = Infinity;

  function compare(total) {
    if (Math.abs(total - target) < Math.abs(best - target)) {
      best = total;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const total = nums[i] + nums[j] + nums[k];
      if (target === total) return total;

      compare(total);

      if (total < target) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  return best;
}

(function () {
  console.time("d");
  const result = threeSumClosest([-1, 2, 1, -4], 1);
  // const result = threeSumClosest([1, 1, 1, 0], 100);
  console.log(result);
  console.timeEnd("d");
})();
