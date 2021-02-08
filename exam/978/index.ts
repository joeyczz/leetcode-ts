function maxTurbulenceSize(arr: number[]): number {
  if (arr.length < 2) return arr.length;

  let start = 0;
  let end = 0;
  let maxLen = 1;

  let flag;
  while (end < arr.length) {
    maxLen = Math.max(maxLen, end - start + 1);

    if (end === arr.length - 1) {
      break;
    }

    if (arr[end] === arr[end + 1]) {
      start = end + 1;
      end++;
      continue;
    }
    if (start === end) {
      flag = arr[end] > arr[end + 1];
    }

    if (flag && arr[end] > arr[end + 1]) {
      flag = false;
    } else if (!flag && arr[end] < arr[end + 1]) {
      flag = true;
    } else {
      start = end;
      flag = !(arr[end] > arr[end + 1]);
    }
    end++;
  }

  return maxLen;
}

(function () {
  console.time("d");
  // const result = maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]);
  const result = maxTurbulenceSize([4, 8, 12, 16]);
  // const result = maxTurbulenceSize([4, 4]);
  console.log(result);
  console.timeEnd("d");
})();
