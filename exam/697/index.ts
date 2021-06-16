function findShortestSubArray(nums: number[]): number {
  const [map, du] = getdu(nums);
  if (du <= 1) return du;

  const duNum: number[] = [];
  for (let item in map) {
    if (map[item] === du) duNum.push(Number(item));
  }

  let minLen = nums.length;
  for (let i = 0; i < duNum.length; i++) {
    const k = duNum[i];

    let start = 0,
      end = nums.length - 1;
    while (nums[start] !== k || nums[end] !== k) {
      if (nums[start] !== k) start++;
      if (nums[end] !== k) end--;
    }
    minLen = Math.min(minLen, end - start + 1);
  }

  return minLen;
}

function getdu(nums: number[]): [{ [key: string]: number }, number] {
  const countMap: { [key: string]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (countMap[nums[i]] === undefined) {
      countMap[nums[i]] = 1;
    } else {
      countMap[nums[i]] += 1;
    }
  }
  return [countMap, Math.max(...Object.values(countMap))];
}

console.time("d");
// const result = findShortestSubArray([1, 2, 2, 3, 1, 4, 2]);
const result = findShortestSubArray([1, 2, 2, 3, 1]);
console.log(result);
console.timeEnd("d");

export default findShortestSubArray;
