class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function kthSmallest(root, k) {
  let inorderTraversal = inOrder(root, []);
  return inorderTraversal[k - 1];
}
function inOrder(root, answer) {
  if (!root) return;
  inOrder(root.left, answer);
  answer.push(root.val);
  inOrder(root.right, answer);
  return answer;
}
console.log(kthSmallest(new TreeNode(3, new TreeNode(2, new TreeNode(1))), 1));
