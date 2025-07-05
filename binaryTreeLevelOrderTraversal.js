class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function levelOrder(root) {
  if (!root) return [];
  const answer = [];
  const queue = [root];
  while (queue.length > 0) {
    let level = [];
    for (let i = queue.length - 1; i >= 0; i--) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      console.log(answer);
    }
    answer.push(level);
  }
  return answer;
}
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7)),
);
console.log(levelOrder(root));
