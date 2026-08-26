/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a
 * different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 */
var maxProfit = function (prices) {
  let buyingPrice = prices[0]; // lets start with initial array element as the min price we bought the stock at and update as we go
  let maxprofit = 0; // for initial amount to compare lets put the maxprofit to 0 as the statement says if no profit, return 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyingPrice) {
      buyingPrice = prices[i];
    }
    if (prices[i] - buyingPrice > maxprofit) {
      maxprofit = prices[i] - buyingPrice;
    }
  }
  return maxprofit;
};

const prices = [7, 1, 5, 3, 6, 4];
maxProfit(prices);

/**
 * to earn maximum profit, one should buy on a day with least price
 * and sell for more price than the buying/purchased price
 * So, we update the buying price to the least value during iteration and
 * parallelly we will check if we are earing profit with current i value.
 * If the profit earned at current i value is more than the profit we already have,
 * we replace the maxprofit with the new profit value.
 */
