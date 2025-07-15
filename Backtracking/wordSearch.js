function wordSearch(board, word) {
  const rows = board.length;
  const columns = board[0].length;
  const visited = Array.from({ length: rows }, () =>
    Array(columns).fill(false),
  );

  function backtracking(r, c, i) {
    if (i === word.length) return true;
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= columns ||
      visited[r][c] ||
      board[r][c] !== word[i]
    ) {
      return false;
    }
    visited[r][c] = true;
    const result =
      backtracking(r - 1, c, i + 1) ||
      backtracking(r, c - 1, i + 1) ||
      backtracking(r + 1, c, i + 1) ||
      backtracking(r, c + 1, i + 1);
    visited[r][c] = false;
    return result;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (backtracking(i, j, 0)) return true;
    }
  }
}
const board = [
  ["a", "b", "c"],
  ["d", "x", "a"],
  ["y", "z", "t"],
];
console.log(wordSearch(board, "cat"));
