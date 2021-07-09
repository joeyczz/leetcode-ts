function n(x: number): number {
  if (x < 2) {
    return 1;
  }
  return x + n(x - 1);
}

function numSubarraysWithSum(nums: number[], goal: number): number {
  const preMap: { [k: string]: number } = { "0": 1 };
  const preSum = [0];
  nums.forEach((v) => {
    const val = preSum[preSum.length - 1] + v;
    preSum.push(val);
    preMap[`${val}`] = preMap[`${val}`] ? preMap[`${val}`] + 1 : 1;
  });

  console.log(preSum, preMap);

  let total = 0;

  for (let c of Object.keys(preMap)) {
    if (goal === 0) {
      const nn = preMap[`${c}`] - 1;
      total += nn > 0 ? n(nn) : 0;
      continue;
    }
    total += preMap[`${c}`] * (preMap[`${+c + goal}`] || 0);
  }

  return total;
}
console.time("d");
// const result = numSubarraysWithSum([0, 0, 0, 0, 0], 0);
const result = numSubarraysWithSum([1, 0, 1, 0, 1], 3);
// const result = numSubarraysWithSum([1, 0, 1, 0, 1], 1);
console.log(result);
console.timeEnd("d");

export default numSubarraysWithSum;
