function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length;

  let maxlen = 0;
  // const map = new Map();
  const map = {};

  let i = 0;
  for (let j = 0; j < s.length; j++) {
    const char = s[j];
    if (map[char] !== undefined) {
      i = Math.max(map[char], i);
    }
    maxlen = Math.max(maxlen, j - i + 1);
    map[char] = j + 1;
  }
  return maxlen;
}

(function () {
  const result = lengthOfLongestSubstring("abcabcbb");
  console.time("d");
  console.log(result);
  console.timeEnd("d");
})();
