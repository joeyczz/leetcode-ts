var peakIndexInMountainArray = function (arr) {
  const len = arr.length;
  let start = 0;
  let end = len - 1;
  while (true) {
    let mid = Math.floor((start + end) / 2);

    let pre = arr[mid - 1],
      cur = arr[mid],
      next = arr[mid + 1];
    if (pre < cur && cur < next) {
      start = mid;
    } else if (pre > cur && cur > next) {
      end = mid;
    } else {
      return mid;
    }
  }
};

console.time("d");
// const result = peakIndexInMountainArray(67);
// const result = peakIndexInMountainArray(12);
const result = peakIndexInMountainArray([
  24,
  69,
  100,
  99,
  79,
  78,
  67,
  36,
  26,
  19,
]);
console.log(result);
console.timeEnd("d");

exports.peakIndexInMountainArray = peakIndexInMountainArray;
