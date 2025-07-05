function minWindow(s, t) {
  let res = [-1, -1];
  let resLength = Infinity;
  let l = 0;
  let r = 0;
  let map = {};
  let mapS = {};
  for (let s of t) {
    map[s] = map[s] ? map[s] + 1 : 1;
  }
  let need = Object.values(map).length;
  let have = 0;
  while (r < s.length) {
    let c = s[r];
    mapS[c] = mapS[c] ? mapS[c] + 1 : 1;
    if (mapS[c] === map[c]) {
      have++;
    }
    if (have === need) {
      while (have === need) {
        let length = r - l + 1;
        if (length < resLength) {
          res = [l, r];
          resLength = length;
        }
        mapS[s[l]]--;
        if (mapS[s[l]] < map[s[l]]) {
          have--;
        }
        l++;
      }
    }
    r++;
  }
  return resLength === Infinity ? "" : s.substring(res[0], res[1] + 1);
}
console.log(minWindow("zasdfaxdfzxasy", "zxxy"));
