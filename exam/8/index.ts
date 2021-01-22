function myAtoi(s: string): number {
  let str = s.trim();
  if (str.length === 0) return 0;

  const re = /^([+|-]?[0-9]+)/;
  const res = str.match(re);
  if (!res) return 0;

  const num = Number(res[0]);
  if (num < -Math.pow(2, 31)) return -Math.pow(2, 31);

  if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

  return num;
}

(function () {
  console.time("d");
  // const result = convert("PAYPALISHIRING", 4);
  // const result = convert("A", 1);
  const result = myAtoi("42");
  // const result = convert("PAYPALISHIRING", 3);
  console.log(result);
  console.timeEnd("d");
})();
