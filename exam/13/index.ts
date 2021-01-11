type ROMAN = "I" | "V" | "X" | "L" | "C" | "D" | "M";

const romanNumber: { [key in ROMAN]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let total = 0;

  const romanList = s.split("") as ROMAN[];

  let prechar = romanNumber[romanList[0]];
  for (let i = 1; i < romanList.length; i++) {
    const char = romanNumber[romanList[i]] ?? 0;
    if (prechar < char) {
      total -= prechar;
    } else {
      total += prechar;
    }
    prechar = char;
  }

  total += prechar;

  return total;
}

(function () {
  const result = romanToInt("MCMXCIV");
  console.log(result);
})();
