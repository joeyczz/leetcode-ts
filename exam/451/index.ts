function frequencySort(s: string): string {
  const _map: { [key: string]: number } = {};
  let maxR = 0;
  for (let c of s) {
    _map[c] = _map[c] ? _map[c] + 1 : 1;
    maxR = Math.max(maxR, _map[c]);
  }

  const _arr = new Array(maxR + 1).fill(0).map(() => [] as string[]);

  for (let key in _map) {
    _arr[_map[key]].push(key);
  }

  let str = "";
  for (let i = maxR; i > 0; i--) {
    const cs = _arr[i];
    str += cs.reduce((p, c) => p + c.repeat(i), "");
  }
  return str;
}

console.time("d");
const result = frequencySort("tree");
console.log(result);
console.timeEnd("d");

export default frequencySort;
