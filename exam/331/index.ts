function isValidSerialization(preorder: string): boolean {
  const list = preorder.split(",");
  let flag = 1;
  for (let i = 0; i < list.length; i++) {
    if (flag <= 0) return false;
    if (list[i] === "#") {
      flag -= 1;
    } else {
      flag += 1;
    }
  }
  return flag === 0;
}

(function () {
  console.time("d");
  const result = isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#");
  console.log(result);
  console.timeEnd("d");
})();
