function findMin(nums) {
  let answer = Infinity;
  let l = 0;
  let r = nums.length - 1;
  let mid = Math.round((r + l) / 2);
  while (l < r - 1) {
    if (
      (nums[mid] < nums[r] && nums[mid] >= nums[l]) ||
      (nums[mid] < nums[r] && nums[mid] < nums[l])
    ) {
      r = mid;
      mid = Math.round((r + l) / 2);
    } else {
      l = mid;
      mid = Math.round((r + l) / 2);
    }
  }
  return Math.min(nums[l], nums[r]);
}
console.log(findMin([4, 5, 0, 1, 2, 3]));
