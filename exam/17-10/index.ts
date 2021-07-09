function majorityElement(nums: number[]): number {
  const map: { [key in string]: number } = {};
  for (let v of nums) {
    map[v] = map[v] ? map[v] + 1 : 1;
    if (map[v] > nums.length / 2) {
      return v;
    }
  }
  return -1;
}

console.time("d");
const result = majorityElement([3, 2, 3]);
// const result = majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5]);
console.log(result);
console.timeEnd("d");

export default majorityElement;
