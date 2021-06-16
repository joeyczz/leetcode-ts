function checkSubarraySum(nums: number[], k: number): boolean {
  const modNum: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const sum = (i > 0 ? nums[i] + modNum[i - 1] : nums[i]) % k;
    modNum.push(sum);
  }

  const modMap: any = { 0: -1 };
  for (let i = 0; i < modNum.length; i++) {
    const _mod = modNum[i];
    if (modMap[_mod] === undefined) {
      modMap[_mod] = i;
      continue;
    }

    if (i - modMap[_mod] >= 2) {
      return true;
    }
  }

  return false;
}

(function () {
  console.time("d");
  const nums = [1, 1, 2, 1],
    k = 3;
  // const nums = [23, 2, 3, 6, 9],
  //   k = 12;
  // const nums = [23, 2, 4, 6, 6],
  //   k = 7;
  // const nums = [23, 2, 4, 6, 7],
  //   k = 6;
  const result = checkSubarraySum(nums, k);
  console.log(result);
  console.timeEnd("d");
})();
