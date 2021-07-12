function divide(dividend: number, divisor: number): number {
  if (divisor === 0) return NaN;

  if (dividend === 0) return dividend;
  if (divisor === 1)
    return dividend > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : dividend;
  if (divisor === -1)
    return -dividend > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : -dividend;

  let absDd = Math.abs(dividend);
  let absDr = Math.abs(divisor);

  let i = 0;
  while (absDd >= 0) {
    absDd -= absDr;
    i++;
  }
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    return -(i - 1);
  }
  return i - 1;
}

console.time("d");
const result = divide(10, 3);
console.log(result);
console.timeEnd("d");

export default divide;
