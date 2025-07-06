function hasDuplicate(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}
console.log(hasDuplicate([1, 2, 4, 5]));
console.log(hasDuplicate([1, 2, 2, 4, 5]));
