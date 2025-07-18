class TrieNode {
  constructor() {
    this.children = new Map();
    this.endOfWord = false;
    this.index = -1;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  addWord(word, i) {
    let current = this.root;
    for (let c of word) {
      if (!current.children.has(c)) {
        current.children.set(c, new TrieNode());
      }
      current = current.children.get(c);
    }
    this.endOfWord = true;
    this.index = i;
  }
}
class Solution {
  findWords(board, words) {
    const trie = new Trie();
    for (let word = 0; word < words.length; word++) {
      trie.addWord(words[word], word);
    }
    const res = [];
    function backtracking(r, c, trie) {
      if (
        r >= board.length ||
        c >= board[0].length ||
        !trie.children.get(board[r][c])
      )
        return;
      const temp = board[r][c];
      const prev = trie;
      trie = trie.children.get(temp);
      if (trie.endOfWord && trie.index !== -1) {
        res.push();
      }
    }
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        this.backtracking(i, j, trie);
      }
    }
    return res;
  }
}
