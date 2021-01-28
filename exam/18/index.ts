function threeSum0(nums: number[], target: number): number[][] {
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i - 1] === nums[i]) {
      continue;
    }
    let j = i + 1,
      k = nums.length - 1;

    while (j < k) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        j++;
        continue;
      }
      const _to = nums[i] + nums[j] + nums[k];

      if (_to === target) {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        continue;
      }

      if (_to < target) {
        j++;
        continue;
      }
      if (_to > target) {
        k--;
        continue;
      }
    }
  }
  return res;
}

function fourSum(nums: number[], target: number): number[][] {
  const sortNums = nums;
  sortNums.sort((a, b) => a - b);

  let list = [];
  for (let i = 0; i < sortNums.length; i++) {
    if (i > 0 && sortNums[i] === sortNums[i - 1]) {
      continue;
    }

    const r = threeSum0(sortNums.slice(i + 1), target - sortNums[i]);

    const vl = r.map((v) => {
      v.unshift(sortNums[i]);
      return v;
    });

    list.push(...vl);
  }
  return list;
}

(function () {
  console.time("d");
  // const result = fourSum([1, 0, -1, 0, -2, 2], 0);
  const result = fourSum([-3, -4, -5, 0, -5, -2, 5, 2, -3], 3);
  console.log(result);
  console.timeEnd("d");
})();
