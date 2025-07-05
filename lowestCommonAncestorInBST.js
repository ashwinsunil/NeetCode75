class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function lowestCommonAncestor(root, p, q) {
  if (!root) return;
  if (root.val === p.val || root.val === q.val) return root;
  if (root.val > p.val && root.val < q.val) return root;
  if (root.val < p.val && root.val > q.val) return root;
  if (root.val < p.val && root.val < q.val)
    return lowestCommonAncestor(root.right, p, q);
  if (root.val > p.val && root.val > q.val)
    return lowestCommonAncestor(root.left, p, q);
}
