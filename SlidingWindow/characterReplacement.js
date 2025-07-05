function characterReplacement(s, k) {
  let maxf = 0;
  let map = {};
  let l = 0;
  let r = 0;
  let answer = 0;
  while (r < s.length) {
    map[s[r]] = map[s[r]] ? map[s[r]] + 1 : 1;
    maxf = Math.max(map[s[r]], maxf);
    if (r - l + 1 - maxf > k) {
      while (r - l + 1 - maxf > k && r >= l) {
        map[s[l]] = map[s[l]] - 1;
        l++;
      }
    }
    answer = Math.max(r - l + 1, answer);
    r++;
  }
  return answer;
}
console.log(characterReplacement("AABABBA", 1));
