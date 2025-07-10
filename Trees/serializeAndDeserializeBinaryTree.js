class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function serialize(root, serializedTree = []) {
  if (!root) {
    serializedTree.push(null);
    return null;
  }
  serializedTree.push(root.val);
  serialize(root.left, serializedTree);
  serialize(root.right, serializedTree);
  return serializedTree.join(",");
}
console.log(
  serialize(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3)),
      new TreeNode(4, null, new TreeNode(5)),
    ),
  ),
);
let answer = serialize(
  new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3)),
    new TreeNode(4, null, new TreeNode(5)),
  ),
);
function deserialize(data) {
  if (data === null) return null;
  let desArray = data.split(",");
  let i = [0];
  function dfs() {
    if (desArray[i[0]] === "") {
      i[0]++;
      return null;
    }

    const root = new TreeNode(parseInt(desArray[i[0]]));
    i[0]++;
    root.left = dfs();
    root.right = dfs();
    return root;
  }
  return dfs();
}
console.log(JSON.stringify(deserialize(answer)));
