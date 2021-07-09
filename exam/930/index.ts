function numSubarraysWithSum(nums: number[], goal: number): number {
  const preSum = [0];
  nums.forEach((v) => {
    preSum.push(preSum[preSum.length - 1] + v);
  });

  console.log(preSum);

  let total = 0;
  let i = 0,
    min = 1,
    max = 1;
  while (i < preSum.length) {
    min = Math.max(i + 1, min);
    while (preSum[min] - preSum[i] < goal && min < preSum.length) {
      min++;
    }
    max = min;
    while (preSum[max] - preSum[i] < goal + 1 && max < preSum.length) {
      max++;
    }
    total += max - min;
    console.log(i, min, max);

    i++;
    while (nums[i - 1] === 0) {
      total += max - Math.max(i + 1, min);
      i++;
    }
  }

  return total;
}
console.time("d");
// const result = numSubarraysWithSum([0, 0, 0, 0, 0], 0);
// const result = numSubarraysWithSum([1, 0, 1, 0, 1], 1);
const result = numSubarraysWithSum([1, 0, 1, 0, 1], 3);
console.log(result);
console.timeEnd("d");

export default numSubarraysWithSum;
