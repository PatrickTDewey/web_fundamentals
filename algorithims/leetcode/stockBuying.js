/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    return recursiveBuy(prices, 0)
};
var recursiveBuy = function(prices, index) {
    if(index >= prices.length){
        return 0;
    }
    debugger;
    let max = 0;
    for(let i = index; i < prices.length; i++){
        let total = 0;
        for(let j = i + 1; j < prices.length; j++){
            if(prices[i] < prices[j]){
                let profit = recursiveBuy(prices, j+1) + prices[j] - prices[i];
                             //      prices, 3             //      4
                            //       prices; 5,             //     3             
                if(profit > total){
                    total = profit
                }
            }
        }
        if(total > max){
            max = total;
        }
    }
    return max
}
console.log(maxProfit([7,6,4,3,1]))