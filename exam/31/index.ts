function nextPermutation(nums: number[]): void {
  const len = nums.length;
  let i = len - 1;
  for (i = len - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      let k = len - 1;
      const t = nums[i - 1];
      while (nums[k] <= t) {
        k--;
      }
      nums[i - 1] = nums[k];
      nums[k] = t;
      break;
    }
  }

  let start = i;
  let end = len - 1;
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

console.time("d");
// const nums = [5, 4, 3, 2, 1];
// const nums = [2, 3, 1];
// const nums = [1, 5, 1];
// const nums = [2, 3, 5, 4, 1];
// const nums = [1, 2, 3, 4, 5];
// const nums = [1, 2, 5, 4, 3];
const nums = [4, 5, 4, 3, 2];
nextPermutation(nums);
console.log(nums);
console.timeEnd("d");

export default nextPermutation;
