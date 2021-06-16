function removeElement(nums: number[], val: number): number {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) nums.splice(i, 1);
  }
  return nums.length;
}

(function () {
  console.time("d");
  const list = [1, 1, 2];
  const result = removeElement(list, 1);
  console.log(result, list);
  console.timeEnd("d");
})();
