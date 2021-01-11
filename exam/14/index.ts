function longestCommonPrefix(strs: string[]): string {
  let str = "";

  let i = 0;
  while (true) {
    const list = strs.map((v) => v?.[i]);
    const fc = list?.[0];
    const diff = list.some((v) => v !== fc);
    if (fc == null || diff) {
      break;
    }
    str += fc;
    i += 1;
  }

  return str;
}

(function () {
  const result = longestCommonPrefix(["dog", "racecar", "car"]);
  console.log(result);
})();
