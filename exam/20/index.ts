const pipei = {
  ")": "(",
  "}": "{",
  "]": "[",
};

function isValid(s: string): boolean {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (str.length > 0 && pipei[s[i]] === str[str.length - 1]) {
      str = str.substr(0, str.length - 1);
    } else {
      str += s[i];
    }
  }
  return str.length === 0;
}

(function () {
  console.time("d");
  // const result = isValid("({[]})");
  const result = isValid("()[]{}");
  console.log(result);
  console.timeEnd("d");
})();
