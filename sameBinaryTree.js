class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function isSameBinaryTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
}
console.log(
  JSON.stringify(
    isSameBinaryTree(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3, null, new TreeNode(6)),
      ),
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3, null, new TreeNode(6)),
      ),
    ),
  ),
);
