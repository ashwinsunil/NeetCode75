function validTree(n, edges) {
  if (edges > n - 1) return false;
  const graph = Array.from({ length: n }, () => {
    return [];
  });
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  console.log(graph);
  const visited = new Set();
  function dfs(node, parent) {
    if (visited.has(node)) return false;
    visited.add(node);
    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) {
        return false;
      }
    }
    return true;
  }
  return dfs(0, -1) && visited.size === n;
}
// console.log(
//   validTree(5, [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [1, 3],
//     [1, 4],
//   ]),
// );
console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ]),
);
