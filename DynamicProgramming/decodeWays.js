function numDecodings(s) {
  let mem = Array(s.length + 1).fill(0);
  mem[s.length] = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === "0") mem[i] = 0;
    else {
      mem[i] = mem[i + 1];
      if (
        s[i + 1] &&
        (s.charAt(i) === "1" || (s.charAt(i) === "2" && s.charAt(i + 1) < "7"))
      )
        mem[i] += mem[i + 2];
    }
  }
  return mem[0];
}
console.log(numDecodings("1012"));
