function climbStairs(n) {
  if (n <= 2) return n;
  const dp = Array(n).fill(-1);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
}
console.log(climbStairs(5));
