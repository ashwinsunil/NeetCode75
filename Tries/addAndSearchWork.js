class TrieNode {
  constructor() {
    this.children = new Map();
    this.endOfWord = false;
  }
}
class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let current = this.root;
    for (let c of word) {
      if (!current.children.has(c)) {
        current.children.set(c, new TrieNode());
      }
      current = current.children.get(c);
    }
    current.endOfWord = true;
  }

  search(word) {
    return this.dfs(word, 0, this.root);
  }
  dfs(word, i, node) {
    if (i === word.length) {
      return node.endOfWord;
    }

    const c = word[i];
    if (c === ".") {
      for (let child of node.children.values()) {
        if (this.dfs(word, i + 1, child)) {
          return true;
        }
      }
      return false;
    } else {
      if (!node.children.has(c)) return false;
      return this.dfs(word, i + 1, node.children.get(c));
    }
  }
}

const dict = new WordDictionary();
dict.addWord("bad");
dict.addWord("dog");
dict.addWord("cad");
console.log(dict.search(".ad"));
console.log(dict.search("do.."));
