/**
 * @param {number[]} prices
 * @return {number}
 */

// 这道题是动态规划
// 只求结果 不求具体解
var maxProfit = function (prices) {
    let end = 0;
    let min = prices[0]
    prices.forEach((element) => {
        if (element < min) {
            min = element
        }
        if (element - min > end) {
            end = element - min
        }
    })
    return end
};