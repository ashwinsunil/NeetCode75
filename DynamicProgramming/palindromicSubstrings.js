function countSubstrings(s) {
  let mem = Array.from({ length: s.length }, () => Array(s.length).fill(false));
  let result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j <= s.length - 1; j++) {
      if (s[j] === s[i] && (j - i <= 2 || mem[i + 1][j - 1])) {
        mem[i][j] = true;
        result++;
      }
    }
  }
  console.log(mem);
  return result;
}
console.log(countSubstrings("aba"));
