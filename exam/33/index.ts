// function search(nums: number[], target: number): number {
//   let start = 0,
//     end = nums.length - 1;

//   while (start <= end) {
//     const mid = Math.floor((end + start) / 2);
//     const midNum = nums[mid],
//       startNum = nums[start],
//       endNum = nums[end];

//     if (midNum === target) return mid;
//     if (startNum === target) return start;
//     if (endNum === target) return end;
//     if (target < midNum) {
//       // 目标 比中间小
//       // 只有中间之前是按顺序的情况下 且 目标比开始还小才从右边找
//       if (target < startNum && midNum > startNum) {
//         start = mid + 1;
//       } else end = mid - 1;
//     } else {
//       // 模板 比中间大
//       // 只有中间之后是按顺序的情况下 且 目标比结束还大才从左边找
//       if (target > endNum && endNum > midNum) {
//         end = mid - 1;
//       } else start = mid + 1;
//     }
//   }
//   return -1;
// }
function search(nums: number[], target: number): number {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);
    const midNum = nums[mid],
      startNum = nums[start],
      endNum = nums[end];

    if (midNum === target) return mid;
    if (startNum === target) return start;
    if (endNum === target) return end;
    if (endNum > startNum) {
      if (target < midNum) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (startNum < midNum) {
      if (target > startNum && target < midNum) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > midNum && target < endNum) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

console.time("d");
const list = [4, 5, 6, 7, 0, 1, 2];
// const list = [4, 5, 6, 7, 0];
// const list = [5, 1, 2, 3, 4];
const result = search(list, 3);
console.log(result);
console.timeEnd("d");

export default search;
