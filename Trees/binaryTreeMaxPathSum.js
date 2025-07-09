class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function maxPathSum(root) {
  if (!root) return 0;
  let res = [root.val];
  dfs(root, res);
  return res[0];
}
function dfs(root, res) {
  if (!root) return 0;
  const leftMax = Math.max(dfs(root.left, res), 0);
  const rightMax = Math.max(dfs(root.right, res), 0);
  res[0] = Math.max(res[0], leftMax + rightMax + root.val);
  return Math.max(leftMax, rightMax) + root.val;
}
console.log(
  maxPathSum(
    new TreeNode(
      -15,
      new TreeNode(10),
      new TreeNode(20, new TreeNode(15, new TreeNode(-5)), new TreeNode(5)),
    ),
  ),
);
