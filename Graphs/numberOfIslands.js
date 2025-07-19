function numIslands(grid) {
  // console.log(`Grid [${grid.length}][${grid[0].length}]`);
  const visited = Array.from({ length: grid.length }, () => {
    return Array(grid[0].length).fill(0);
  });
  let result = 0;
  function backtracking(r, c, visited) {
    if (
      r < 0 ||
      c < 0 ||
      r >= grid.length ||
      c >= grid[0].length ||
      visited[r][c] ||
      grid[r][c] === "0"
    ) {
      return;
    }
    // console.log("gridItem: " + grid[r][c]);
    visited[r][c] = 1;
    // console.log(visited);
    // console.log(grid[r][c]);
    backtracking(r + 1, c, visited);
    backtracking(r, c + 1, visited);
    backtracking(r - 1, c, visited);
    backtracking(r, c - 1, visited);
    // console.log("here");
    return;
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        backtracking(i, j, visited);
        result++;
      }
    }
  }
  return result;
}
console.log(
  numIslands([
    ["1", "1", "0", "0", "1"],
    ["1", "1", "0", "0", "1"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
);
