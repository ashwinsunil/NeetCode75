class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function buildTree(preorder, inorder) {
  const map = {};
  let preInd = 0;
  inorder.forEach((ele, i) => (map[ele] = i));
  function dfs(l, r) {
    if (l > r) return null;
    const rootVal = preorder[preInd++];
    const root = new TreeNode(rootVal);
    let mid = map[rootVal];
    root.left = dfs(l, mid - 1);
    root.right = dfs(mid + 1, r);
    return root;
  }
  return dfs(0, preorder.length - 1);
}
console.log(buildTree([1, 2, 3, 5, 4, 6], [3, 2, 5, 1, 4, 6]));
