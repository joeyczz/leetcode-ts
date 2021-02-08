// f(n) = (f(n - 1))f(0) , (f(n-2))f(1), ..., (f(0))f(n-1)
function generateParenthesis(n: number): string[] {
  if (n === 0) {
    return [""];
  }
  if (n === 1) {
    return ["()"];
  }

  const alls = [];

  for (let i = n - 1; i >= 0; i--) {
    console.log("----- sta", i);
    const fi = generateParenthesis(i);
    console.log("fi", fi);
    const fi1 = fi.map((v) => `(${v})`);
    console.log("fi1", fi1);
    const fn_1 = generateParenthesis(n - 1 - i);
    console.log("fn_1", fn_1);
    console.log("----- end", i);

    for (let j = 0; j < fi1.length; j++) {
      for (let k = 0; k < fn_1.length; k++) {
        alls.push(fi1[j] + fn_1[k]);
      }
    }
  }

  return alls;
}

(function () {
  console.time("d");
  // const result = generateParenthesis(2);
  // const result = generateParenthesis(3);
  const result = generateParenthesis(4);

  // [ '(())', '()()' ]

  // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]

  // ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]

  // ["(((())))","((()()))","((())())","(()(()))","(()()())","((()))()","(()())()","(())()()","()(())()","()((()))","()(()())","()(())()","()()(())","()()()()"]

  console.log(result);
  console.timeEnd("d");
})();
