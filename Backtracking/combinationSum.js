function combinationSum(nums, target) {
  const result = [];
  function backtrack(nums, target, ans, cur, index) {
    console.log(cur);
    if (target === 0) {
      ans.push([...cur]);
    } else if (target < 0 || index >= nums.length) {
      return;
    } else {
      cur.push(nums[index]);
      backtrack(nums, target - nums[index], ans, cur, index);

      cur.pop();
      backtrack(nums, target, ans, cur, index + 1);
    }
  }
  backtrack(nums, target, result, [], 0);
  return result;
}
console.log(combinationSum([3, 4, 5], 16));
