function equalSubstring(s: string, t: string, maxCost: number): number {
  const costs = [];

  for (let i = 0; i < s.length; i++) {
    costs.push(Math.abs(t.charCodeAt(i) - s.charCodeAt(i)));
  }

  let left = 0,
    right = 0;

  let total = 0;

  while (right < s.length) {
    if (total + costs[right] > maxCost) {
      total = total - costs[left];
      left += 1;
    }
    total += costs[right];
    right += 1;
  }
  return right - left;
}

console.time("d");
const result = equalSubstring("krrgw", "zjxss", 19);
// const result = equalSubstring("abcd", "bcdf", 3);
console.log(result);
console.timeEnd("d");

export default equalSubstring;
