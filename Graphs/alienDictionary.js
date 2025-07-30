function foreignDictionary(words) {
  let adj = {};
  for (const word of words) {
    for (const char of word) {
      adj[char] = new Set();
    }
  }
  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    let minLength = Math.min(word1.length, word2.length);
    if (
      word1.length > word2.length &&
      word1.slice(0, minLength) === word2.slice(0, minLength)
    ) {
      return "";
    }
    for (let j = 0; j < minLength; j++) {
      if (word1[j] !== word2[j]) {
        adj[word1[j]].add(word2[j]);
        break;
      }
    }
  }

  const res = [];
  let visited = {};
  const dfs = (node) => {
    if (node in visited) return visited[node];
    visited[node] = true;
    for (let char of adj[node]) {
      if (dfs(char)) return true;
    }
    res.push(node);
    visited[node] = false;
    return false;
  };
  for (let char in adj) {
    if (dfs(char)) return "";
  }
  return res.reverse().join("");
}
console.log(foreignDictionary(["hrn", "hrf", "er", "enn", "rfnn"]));
console.log(foreignDictionary(["wrtj", "wrt"]));
