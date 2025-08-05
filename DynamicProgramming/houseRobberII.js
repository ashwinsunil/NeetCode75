function rob(nums) {
  if (nums.length === 1) return nums[0];
  let mem = Array.from({ length: nums.length }, () => Array(2).fill(-1));
  const dfs = (i, first = false) => {
    if (i >= nums.length) return 0;
    if (first && i === nums.length - 1) {
      return 0;
    }
    if (mem[i][first] !== -1) return mem[i][first];
    return (mem[i][first] = Math.max(
      dfs(i + 1, first),
      dfs(i + 2, first | (i === 0)) + nums[i],
    ));
  };
  return Math.max(dfs(0, 1), dfs(1, 0));
}
console.log(rob([2, 9, 8, 6, 6]));
console.log(rob([1, 2, 3, 1]));
