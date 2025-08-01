function rob(nums) {
  let mem = Array(nums.length).fill(-1);
  const dfs = (i) => {
    if (i >= nums.length) return 0;
    if (mem[i] !== -1)
      return mem[i];
    return mem[i] = Math.max(dfs(i + 1), nums[i] + dfs(i + 2));
  }
  return dfs(0);
}
console.log(rob([2, 9, 8, 5, 6]));
console.log(rob([3, 1, 1, 3]));
