function groupAnagrams(strs) {
  const map = {};
  for (let s of strs) {
    const temp = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      temp[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    }
    const key = temp.join(",");
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }
  return Object.values(map);
}
console.log(groupAnagrams(["cat", "hat", "this", "act", "tac", "tha"]));
