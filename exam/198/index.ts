function rob01(nums: number[], map: { [key: number]: number }): number {
  const len = nums.length;
  if (nums[len - 1] === 0) return rob01(nums.slice(0, len - 1), map);
  if (map[len] !== undefined) return map[len];
  if (len <= 0) return 0;
  if (len === 1) {
    map[1] = nums[0];
    return nums[0];
  }
  if (len === 2) {
    map[2] = Math.max(nums[0], nums[1]);
    return Math.max(nums[0], nums[1]);
  }

  // console.log(len, nums);
  // return 0;
  const last = rob01(nums.slice(0, len - 2), map) + nums[len - 1];
  const lastP = rob01(nums.slice(0, len - 3), map) + nums[len - 2];
  map[len] = Math.max(last, lastP);
  return Math.max(last, lastP);
}

function rob0(nums: number[]): number {
  const len = nums.length;
  if (len <= 0) return 0;
  if (len === 1) return nums[0];
  if (len === 2) return Math.max(nums[0], nums[1]);
  const map0 = {};
  const last = rob01(nums.slice(0, len - 2), map0) + nums[len - 1];
  const lastP = rob01(nums.slice(0, len - 3), map0) + nums[len - 2];
  return Math.max(last, lastP);
}

(function () {
  console.time("d");
  const list = [2, 3, 2, 1, 2];
  // const list = [200, 3, 140, 20, 10];
  // const list = [6, 6, 4, 8, 4, 3, 3, 10];
  // const list = [1, 2, 3, 1];
  const result = rob0(list);
  console.log(result);
  console.timeEnd("d");
})();
