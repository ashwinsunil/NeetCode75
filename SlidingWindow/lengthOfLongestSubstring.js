function lengthOfLongestSubstring(s) {
  let answer = 0;
  if (s.length === 0) return answer;
  let set = new Set();
  let l = 0;
  let r = 1;
  set.add(s[l]);
  while (l < r && r < s.length) {
    if (set.has(s[r])) {
      while (set.has(s[r])) {
        set.delete(s[l]);
        l++;
      }
    }
    set.add(s[r]);
    answer = Math.max(r - l, answer);
    r++;
  }
  return answer + 1;
}
console.log(lengthOfLongestSubstring("xxxx"));
