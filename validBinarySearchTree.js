class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function isValidBST(root, range = [-Infinity, Infinity]) {
  if (!root) return true;
  if (root.left && root.left.val >= root.val) return false;
  if (root.right && root.right.val <= root.val) return false;
  if (range[0] >= root.val || range[1] <= root.val) return false;
  return (
    isValidBST(root.left, [range[0], root.val]) &&
    isValidBST(root.right, [root.val, range[1]])
  );
}
const root = new TreeNode(1, new TreeNode(2));
console.log(isValidBST(root));
