function coinChange(coins, amount) {
    let mem = Array(amount+1).fill(amount + 1);
    mem[0] = 0;
    for (let i = 0; i <= amount; i++){
        for (let j = 0; j < coins.length; j++){
            if(coins[j] <=i) {
                mem[i] = Math.min(mem[i], 1 + mem[i - coins[j]]);
            }
        }
    }
    return mem[amount] > amount ? -1 : mem[amount];
}
console.log(coinChange([1,2,5], 11));
