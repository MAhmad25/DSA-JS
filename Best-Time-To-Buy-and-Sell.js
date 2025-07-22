const maxProfit = function (prices) {
      let maxProfit = 0;
      for (let i = 0; i < prices.length - 1; i++)
            for (let j = i + 1; j < prices.length; j++) {
                  const currentProfit = prices[j] - prices[i];
                  if (currentProfit > maxProfit) maxProfit = currentProfit;
            }
      return maxProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
