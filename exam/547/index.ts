/**
 * 广度优先遍历
 */
// function findCircleNum(isConnected: number[][]): number {
//   const len = isConnected.length;
//   const visited = new Set();
//   let provinces = 0;
//   for (let i = 0; i < len; i++) {
//     if (!visited.has(i)) {
//       const queue = [i];
//       while (queue.length > 0) {
//         const kkk: number = queue.shift()!;
//         visited.add(kkk);
//         for (let j = 0; j < len; j++) {
//           if (isConnected[kkk][j] === 1 && !visited.has(j)) {
//             queue.push(j);
//           }
//         }
//       }
//       provinces++;
//     }
//   }
//   return provinces;
// }

/**
 * 深度优先遍历
 */
// function findCircleNum(isConnected: number[][]): number {
//   const len = isConnected.length;
//   const visited: Set<number> = new Set();
//   let provinces = 0;
//   for (let i = 0; i < len; i++) {
//     if (!visited.has(i)) {
//       dfs(isConnected, visited, i);
//       provinces++;
//     }
//   }
//   return provinces;
// }

// function dfs(isConnected: number[][], visited: Set<number>, k: number) {
//   visited.add(k);
//   const len = isConnected.length;
//   for (let i = 0; i < len; i++) {
//     if (isConnected[k][i] === 1 && !visited.has(i)) {
//       dfs(isConnected, visited, i);
//     }
//   }
// }

/**
 * 并查集
 */
function findCircleNum(isConnected: number[][]): number {
  const len = isConnected.length;
  const list = [];
  for (let i = 0; i < len; i++) {
    list.push(i);
  }

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (isConnected[i][j] === 1) {
        union(list, i, j);
      }
    }
    console.log(list);
  }

  let provinces = 0;
  for (let i = 0; i < len; i++) {
    if (list[i] == i) {
      provinces++;
    }
  }

  return provinces;
}

function union(list: number[], index1: number, index2: number) {
  list[find(list, index1)] = find(list, index2);
}
function find(list: number[], index: number) {
  if (list[index] != index) {
    list[index] = find(list, list[index]);
  }
  return list[index];
}

(function () {
  console.time("d");
  const cities = [
    [1, 1, 1],
    [1, 1, 1],
    [0, 1, 1],
  ];
  // const cities = [
  //   [1, 1, 0],
  //   [1, 1, 0],
  //   [0, 0, 1],
  // ];

  // const cities = [
  //   [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  //   [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  //   [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  //   [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
  //   [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
  //   [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  //   [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  // ];
  const result = findCircleNum(cities);
  console.log(result);
  console.timeEnd("d");
})();
