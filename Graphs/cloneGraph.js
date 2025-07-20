class Node {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}
function cloneGraph(node) {
  let map = new Map();
  return dfs(node, map);
}
function dfs(node, map) {
  if (!node) return null;
  if (map.has(node)) return map.get(node);
  const copy = new Node(node.val);
  map.set(node, copy);
  for (let neighbor of node.neighbors) {
    copy.neighbors.push(dfs(node, map));
  }
  return copy;
}
// Step 1: Create nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

// Step 2: Establish neighbor relationships
node1.neighbors = [node2, node3];
node2.neighbors = [node1];
node3.neighbors = [node1];
console.log(cloneGraph(node1));
