class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy : number = prices[0];
        let maxProfit : number = 0;

        for(let i = 1; i < prices.length; i++) {
            if(prices[i] < buy){
                buy = prices[i];
            } 
            else {
                let profit = prices[i] - buy;
                if(maxProfit < profit){
                    maxProfit = profit;
                }
            }
        }

        return maxProfit;
    }
}
