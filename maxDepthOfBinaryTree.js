class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function maxDepth(root) {
  if (!root) return 0;
  return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
}
console.log(
  JSON.stringify(
    maxDepth(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3, null, new TreeNode(6)),
      ),
    ),
  ),
);
