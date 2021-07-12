function findSubstring(s: string, words: string[]): number[] {
  if (words.length === 0) return [];

  const wordLen = words[0].length;

  const desLen = words.length * wordLen;

  const sLen = s.length;
  if (desLen === 0 || desLen > sLen) return [];

  const _map: { [key in string]: number } = {};
  for (let w of words) {
    _map[w] = _map[w] ? _map[w] + 1 : 1;
  }

  const slist: number[] = [];
  for (let i = 0; i <= sLen - desLen; i++) {
    const subS = s.substr(i, desLen);
    let start = 0;
    const _nMap = Object.create(_map);
    while (start < subS.length) {
      const subW = subS.substr(start, wordLen);
      if (!_nMap[subW]) break;
      _nMap[subW] -= 1;
      start += wordLen;
    }
    if (start >= subS.length) {
      slist.push(i);
    }
  }
  return slist;
}

console.time("d");
const result = findSubstring("barfoothefoobarman", ["foo", "bar"]);
console.log(result);
console.timeEnd("d");

export default findSubstring;
