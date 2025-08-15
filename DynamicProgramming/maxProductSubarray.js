function maxProduct(nums) {
  // this is called the Kadane's Algorithm
  let res = -Infinity;
  let curMax = 1;
  let curMin = 1;
  for (let i = 0; i < nums.length; i++) {
    let temp = curMax * nums[i];
    curMax = Math.max(Math.max(nums[i], nums[i] * curMax), nums[i] * curMin);
    curMin = Math.min(Math.min(temp, nums[i]), nums[i] * curMin);
    res = Math.max(res, curMax);
  }
  return res;
}
console.log(maxProduct([1, 2, -3, 4]));
