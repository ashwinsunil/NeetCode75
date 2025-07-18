const util = require("util");
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
        current.endOfWord = true;
        current.index = i;
    }
}
class Solution {
    findWords(board, words) {
        const trie = new Trie();
        for (let word = 0; word < words.length; word++) {
            trie.addWord(words[word], word);
        }
        // console.log(JSON.stringify(util.inspect(trie,{ showHidden: false, depth: 5, colors: true }), null, 2));
        const res = [];
        function backtracking(r, c, trie) {
            if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || !trie.children?.get(board[r][c]) || board[r][c] === "#") return;
            const temp = board[r][c];
            board[r][c] = "#";
            const prev = trie;
            trie = trie.children.get(temp);
            if (trie.endOfWord && trie.index !== -1) {
                res.push(words[trie.index]);
                trie.index = -1;
            }
            backtracking(r - 1, c, trie);
            backtracking(r, c - 1, trie);
            backtracking(r, c + 1, trie);
            backtracking(r + 1, c, trie);
            board[r][c] = temp;
        }
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                backtracking(i, j, trie.root);
            }
        }
        return res;
    }
}
const solution = new Solution();
console.log(
    solution.findWords(
        [
            ["a", "b", "c", "d"],
            ["s", "a", "a", "t"],
            ["a", "c", "k", "e"],
            ["a", "c", "d", "n"]
        ],
        ["bat", "cat", "back", "backend", "stack"]
    )
);
