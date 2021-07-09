function maxIceCream(costs: number[], coins: number): number {
  const so = costs.sort((a, b) => a - b);
  let i = 0;

  while (coins >= 0) {
    coins -= costs[i];
    i++;
  }

  return i - 1;
}

console.time("d");
const result = maxIceCream([1, 3, 2, 4, 1], 7);
console.log(result);
console.timeEnd("d");

export default maxIceCream;
