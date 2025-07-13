function longestConsecutive(nums) {
  const map = {};
  let res = 0;
  for (let num of nums) {
    if (!map[num]) {
      map[num] = (map[num - 1] || 0) + (map[num + 1] || 0) + 1;
      map[num - (map[num - 1] || 0)] = map[num];
      map[num + (map[num + 1] || 0)] = map[num];
    }
    res = Math.max(res, map[num]);
    console.log(map);
  }
  return res;
}
console.log(longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1]));
