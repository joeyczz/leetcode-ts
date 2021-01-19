function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const len = nums1.length + nums2.length;

  let min1, min2;
  while (nums1.length + nums2.length >= len / 2) {
    // console.log(nums1, nums2);
    if (nums1.length <= 0 || (nums2.length > 0 && nums2[0] <= nums1[0])) {
      min1 = min2;
      min2 = nums2.shift();
    } else {
      min1 = min2;
      min2 = nums1.shift();
    }
  }

  if (len % 2 === 1) {
    return min2;
  }
  return (min2 + min1) / 2;
}

(function () {
  // const result = findMedianSortedArrays([1, 3], [2]);
  // const result = findMedianSortedArrays([1, 2], [3, 4]);
  // const result = findMedianSortedArrays([0, 0], [0, 0]);
  const result = findMedianSortedArrays([], [2]);
  console.time("d");
  console.log(result);
  console.timeEnd("d");
})();
