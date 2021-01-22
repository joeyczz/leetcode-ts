function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let str = "";
  const len = s.length;
  const mid = 2 * (numRows - 1);

  for (let i = 0; i < numRows; i++) {
    let k = 0;
    while (k < len) {
      if (i === 0 || i === numRows - 1) {
        str += s[k + i] ?? "";
      } else {
        str += (s[k + i] ?? "") + (s[k + mid - i] ?? "");
      }
      k += mid;
    }
  }

  return str;
}

(function () {
  console.time("d");
  // const result = longestPalindrome("cabbad");
  // const result = longestPalindrome("mbabadm");
  // const result = convert("PAYPALISHIRING", 4);
  // const result = convert("A", 1);
  const result = convert("ABCD", 3);
  // const result = convert("PAYPALISHIRING", 3);
  console.log(result);
  console.timeEnd("d");
})();
