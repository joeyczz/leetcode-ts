function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false;
  let c = true;
  for (let i = 1; i < arr.length; i++) {
    let la = arr[i - 1];
    let cur = arr[i];

    if (cur === la || (i === 1 && cur < la)) return false;

    if (c && cur < la) {
      c = false;
      continue;
    }

    if (!c && cur > la) return false;
  }
  return true && !c;
}

(function () {
  console.time("d");
  const result = validMountainArray([0, 3, 2, 1]);
  console.log(result);
  console.timeEnd("d");
})();
