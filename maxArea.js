function maxArea(heights) {
  let maxArea = 0;
  let l = 0;
  let r = heights.length - 1;
  while (l < r) {
    let height = Math.min(heights[l], heights[r]);
    let distance = r - l;
    let area = height * distance;
    maxArea = Math.max(maxArea, area);
    if (heights[l] < heights[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
}
console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6]));
