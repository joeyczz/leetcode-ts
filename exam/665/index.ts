function checkPossibility(nums: number[]): boolean {
  if (nums.length < 1) return true;
  let flag: boolean = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (flag) return false;

      if (
        i - 1 >= 0 &&
        nums[i - 1] > nums[i + 1] &&
        i + 2 < nums.length &&
        nums[i] > nums[i + 2]
      ) {
        return false;
      }

      flag = true;
    }
  }
  return true;
}

(function () {
  console.time("d");
  const result = checkPossibility([3, 4, 2, 3]);
  console.log(result);
  console.timeEnd("d");
})();
