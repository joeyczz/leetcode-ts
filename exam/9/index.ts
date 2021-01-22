// function isPalindrome(x: number): boolean {
//   if (x < 0) return false;
//   const xStr = x.toString();
//   return xStr === xStr.split("").reverse().join("");
// }

function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  if (x === 0) return true;

  let nums = [];
  let num = x;
  while (num !== 0) {
    const m = num % 10;
    nums.push(m);
    num = (num - m) / 10;
  }

  let equal = true;

  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    if (nums[i] !== nums[j]) {
      equal = false;
      break;
    }
    i++;
    j--;
  }
  return equal;
}

(function () {
  console.time("d");
  const result = isPalindrome(242);
  console.log(result);
  console.timeEnd("d");
})();
