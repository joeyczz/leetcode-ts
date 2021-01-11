function twoSum(nums: number[], target: number): number[] {
  const map = {};
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const ri = map[target - num] ?? -1;

    if (ri >= 0) {
      res.push(...[ri, i]);
    }
    map[num] = i;
  }

  return res;
}

(function () {
  const result = twoSum([2, 7, 11, 15], 9);
  console.log(result);
})();
