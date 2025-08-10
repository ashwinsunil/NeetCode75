function longestPalindrome(s) {
  let resIndex = 0;
  let resLength = 0;
  let mem = Array.from({ length: s.length }, () => {
    return Array(s.length).fill(false);
  });
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j] && (j - i <= 2 || mem[i + 1][j - 1])) {
        mem[i][j] = true;
        if (resLength < j - i + 1) {
          resLength = j - i + 1;
          resIndex = i;
        }
      }
    }
  }
  console.log(mem);
  return s.slice(resIndex, resLength + resIndex);
}
console.log(longestPalindrome("cabbak"));
