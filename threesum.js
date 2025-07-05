function threesum(nums) {
  const res = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let j = nums.length - 1;
    while (l < j) {
      let sum = nums[i] + nums[j] + nums[l];
      if (sum > 0) {
        j--;
      } else if (sum < 0) {
        l++;
      } else {
        res.push([nums[i], nums[j], nums[l]]);
        l++;
        j--;
        while (l < j && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }
  return res;
}
console.log(threesum([-1, 2, 0, -1, 1, -4]));
