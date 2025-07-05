class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function isSubtree(root, subRoot) {
  if (!root) return false;
  if (root.val === subRoot.val) {
    if (isSame(root, subRoot)) {
      return true;
    }
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
function isSame(root, subRoot) {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;
  if (root.val !== subRoot.val) return false;
  return isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right);
}
