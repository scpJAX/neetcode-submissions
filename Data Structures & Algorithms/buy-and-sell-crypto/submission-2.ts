class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let sell : number = 0;
        let buy : number = 101;
        let maxProfit : number = 0;

        for(let p of prices) {
            if (p < buy && sell !== 0){
                buy = p;
                sell = 0;
            }
            else if(p < buy){
                buy = p;
            }
            else if(p > sell){
                sell = p;
            }
            let profit = sell - buy;
            if (maxProfit < profit) {
                maxProfit = profit;
            }
        }

        return maxProfit;
    }
}
