class TrieNode {
	constructor() {
		this.children = new Map();
		this.endOfWord = false;
	}
}
class PrefixTree {
	constructor() {
		this.root = new TrieNode();
	}

	insert(word) {
		let current = this.root;
		for(let c of word) {
			if(!current.children.has(c)){
				current.children.set(c, new TrieNode());
			}
			current = current.children.get(c);
		}
		current.endOfWord = true;
	}

	search(word) {
		let current = this.root;
		for(let c of word) {
			if(!current.children.has(c)) return false;
			current = current.children.get(c);
		}
		return current.endOfWord;
	}

	startsWith(prefix) {
		let current = this.root;
		for(let c of prefix) {
			if(!current.children.has(c)) return false;
			current = current.children.get(c);
		}
		return true;
	}
}
const root = new PrefixTree();
console.log(root.insert("cat"));
console.log(root.search("cat"));
console.log(root.search("catch"));
console.log(root.startsWith("ca"));
console.log(root.insert("what"));
