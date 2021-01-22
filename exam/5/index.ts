function isR(s: string) {
  return s.split("").reverse().join("") === s;
}

function longestPalindrome(s: string): string {
  if (isR(s)) return s;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let m = i;
    let n = i;
    let singleChar = s.substring(m, n + 1);
    while (isR(singleChar) && m >= 0 && n < s.length) {
      str = singleChar.length > str.length ? singleChar : str;
      m--;
      n++;
      singleChar = s.substring(m, n + 1);
    }

    let k = i;
    let j = i + 1;
    let doubleChar = s.substring(k, j + 1);
    while (isR(doubleChar) && k >= 0 && j < s.length) {
      str = doubleChar.length > str.length ? doubleChar : str;
      k--;
      j++;
      doubleChar = s.substring(k, j + 1);
    }
  }
  return str;
}

(function () {
  // const result = longestPalindrome("cabbad");
  // const result = longestPalindrome("mbabadm");
  console.time("d");
  const result = longestPalindrome(
    "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
  );
  console.log(result);
  console.timeEnd("d");
})();
