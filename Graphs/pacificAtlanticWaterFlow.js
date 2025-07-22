const { Queue } = require("@datastructures-js/queue");
function pacificAtlantic(heights) {
  const rows = heights.length;
  const columns = heights[0].length;
  const pacific = Array.from({ length: rows }, () => {
    return Array(columns).fill(false);
  });
  const atlantic = Array.from({ length: rows }, () => {
    return Array(columns).fill(false);
  });
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const pacificQueue = new Queue();
  const atlanticQueue = new Queue();
  for (let r = 0; r < rows; r++) {
    pacificQueue.push([r, 0]);
    atlanticQueue.push([r, columns - 1]);
  }
  for (let c = 0; c < columns; c++) {
    pacificQueue.push([0, c]);
    atlanticQueue.push([rows - 1, c]);
  }
  function bfs(queue, ocean, heights) {
    while (!queue.isEmpty()) {
      let [r, c] = queue.pop();
      ocean[r][c] = true;
      for (let [dr, dc] of directions) {
        let nr = r + dr,
          nc = c + dc;
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < columns &&
          !ocean[nr][nc] &&
          heights[nr][nc] >= heights[r][c]
        ) {
          queue.push([nr, nc]);
        }
      }
    }
  }
  bfs(pacificQueue, pacific, heights);
  bfs(atlanticQueue, atlantic, heights);
  const res = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j]);
      }
    }
  }
  return res;
}
console.log(
  pacificAtlantic([
    [4, 2, 7, 3, 4],
    [7, 4, 6, 4, 7],
    [6, 3, 5, 3, 6],
  ]),
);
