const numStr = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letterCombinations(digits: string): string[] {
  let digs = digits;
  let list = [];
  while (digs.length > 0) {
    if (list.length === 0) list = [""];

    const _nlist = [];
    for (let i = 0; i < list.length; i++) {
      const prestr = list[i];

      const str = numStr[digs[0]];

      for (let j = 0; j < str.length; j++) {
        _nlist.push(prestr + str[j]);
      }
    }
    list = _nlist;
    digs = digs.substr(1);
  }

  return list;
}

(function () {
  const result = letterCombinations("23");
  console.log(result);
})();
