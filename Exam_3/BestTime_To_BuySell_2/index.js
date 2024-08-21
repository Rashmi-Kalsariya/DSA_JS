let prices = [7, 1, 5, 3, 6, 4]

const BuyAndSell = (prices) => {
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {

        if (prices[i] > prices[i - 1]) {

            maxProfit += prices[i] - prices[i - 1];

        }
    }

    return maxProfit;
};

console.log((BuyAndSell(prices)));