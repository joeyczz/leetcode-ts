function hIndex(citations: number[]): number {
  const len = citations.length;
  if (len === 0) return 0;
  for (let i = 0; i < len; i++) {
    const h = len - i;
    const min = citations[i];
    const max = i === 0 ? 0 : citations[i - 1];
    if (min >= h && max <= h) {
      return h;
    }
  }
  return 0;
}

console.time("d");
// const result = hIndex([8, 9, 10, 15, 16]);
// const result = hIndex([0, 1, 3, 5, 6]);
const result = hIndex([0]);
// const result = hIndex([2, 2, 2, 2, 2]);
console.log(result);
console.timeEnd("d");

export default hIndex;
