function reverse(x: number): number {
  // -231 <= x <= 231 - 1
  if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) return 0;
  const reX = Number(Math.abs(x).toString().split("").reverse().join(""));
  if (reX < -Math.pow(2, 31) || reX > Math.pow(2, 31) - 1) return 0;
  if (x < 0) {
    return -reX;
  }
  return reX;
}

(function () {
  console.time("d");
  // const result = convert("PAYPALISHIRING", 4);
  // const result = convert("A", 1);
  const result = reverse(123);
  // const result = convert("PAYPALISHIRING", 3);
  console.log(result);
  console.timeEnd("d");
})();
