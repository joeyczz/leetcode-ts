function removeDuplicates(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    const pre = nums[i];
    while (pre === nums[i + 1]) {
      nums.splice(i + 1, 1);
    }
  }
  return nums.length;
}

(function () {
  const list = [1, 1, 2]
  const result = removeDuplicates(list);
  console.log(result, list);
})();
