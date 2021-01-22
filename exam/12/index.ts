const roman = [
  ["I", "IV", "V", "IX"],
  ["X", "XL", "L", "XC"],
  ["C", "CD", "D", "CM"],
  ["M"],
];

function newArrayFill(n, c) {
  const list = [];
  let i = 0;
  while (i < n) {
    list.push(c);
    i++;
  }
  return list;
}

function getR(list, n) {
  if (n < 4) {
    return newArrayFill(n, list[0]).join("");
  }

  if (n === 4) {
    return list[1];
  }

  if (n < 9) {
    return list[2] + newArrayFill(n - 5, list[0]).join("");
  }

  if (n === 9) {
    return list[3];
  }
}

function intToRoman(num: number): string {
  let i = 0;
  let n = num;
  let list = [];
  while (n > 0) {
    const xRoma = roman[i];
    const c = n % 10;
    list.push(getR(xRoma, c));
    n = (n - c) / 10;
    i++;
  }
  return list.reverse().join("");
}

(function () {
  console.time("d");
  // const result = intToRoman(3);
  // const result = intToRoman(4);
  const result = intToRoman(9);
  // const result = intToRoman(58);
  // const result = intToRoman(1994);
  console.log(result);
  console.timeEnd("d");
})();
