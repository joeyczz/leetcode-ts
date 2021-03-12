/**
 * 0 0
 * 1 1
 * 2 1
 * 3 2
 * 4 1
 * 5 2
 * 6 2
 * 7 3
 * 8 1
 * 9 2
 * 10 2
 * 11 3
 * 12 2
 * 13 3
 * 14 3
 * 15 4
 * 16 1
 */
function countBits(num: number): number[] {
  const nums: number[] = new Array(num + 1).fill(0);
  let n = 0;
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      nums[i] = 0;
      continue;
    }
    if (i == 2 ** n) {
      n++;
      nums[i] = 1;
      continue;
    }
    const divi = 2 ** (n - 1);
    nums[i] = nums[divi] + nums[i - divi];
  }
  return nums;
}

(function () {
  console.time("d");
  const result = countBits(9);
  console.log(result);
  console.timeEnd("d");
})();
