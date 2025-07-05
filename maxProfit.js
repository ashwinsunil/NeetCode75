function maxProfit(prices) {
  let maxProfit = 0;
  let i = 0;
  let j = 1;
  while (j < prices.length) {
    console.log("i " + prices[i]);
    console.log("j " + prices[j]);
    if (prices[j] > prices[i]) {
      let profit = prices[j] - prices[i];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      i = j;
    }
    j++;
  }
  return maxProfit;
}
console.log(maxProfit([10, 1, 5, 6, 7, 1]));
