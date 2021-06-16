function longestConsecutive(nums: number[]): number {
  const numsSet = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    numsSet.add(nums[i]);
  }

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (numsSet.has(val - 1)) continue;
    let start = val;
    while (numsSet.has(start + 1)) {
      start += 1;
    }
    max = Math.max(max, start - val + 1);
  }
  return max;
}

console.time("d");
const list = [100, 4, 200, 1, 3, 2];
// const list = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const result = longestConsecutive(list);
console.log(result);
console.timeEnd("d");

export default longestConsecutive;
