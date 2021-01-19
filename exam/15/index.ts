function threeSum(nums: number[]): number[][] {
  const res = [];
  nums.sort((a, b) => a - b);

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

      if (_to === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        continue;
      }

      if (_to < 0) {
        j++;
        continue;
      }
      if (_to > 0) {
        k--;
        continue;
      }
    }
  }
  return res;
}

(function () {
  const result = threeSum([
    34,
    55,
    79,
    28,
    46,
    33,
    2,
    48,
    31,
    -3,
    84,
    71,
    52,
    -3,
    93,
    15,
    21,
    -43,
    57,
    -6,
    86,
    56,
    94,
    74,
    83,
    -14,
    28,
    -66,
    46,
    -49,
    62,
    -11,
    43,
    65,
    77,
    12,
    47,
    61,
    26,
    1,
    13,
    29,
    55,
    -82,
    76,
    26,
    15,
    -29,
    36,
    -29,
    10,
    -70,
    69,
    17,
    49,
  ]);
  console.log(result);
})();
