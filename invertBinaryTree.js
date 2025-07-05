class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function invertTree(root) {
  if (!root) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
console.log(
  JSON.stringify(
    invertTree(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3, null, new TreeNode(6)),
      ),
    ),
  ),
);
