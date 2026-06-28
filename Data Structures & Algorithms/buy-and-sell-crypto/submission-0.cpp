class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int profit = 0;
        int max = 0;
        int lowest = 101;
        for(int j = prices.size()-1; j >= 0; j--){
            if(prices[j] < lowest)
                lowest = prices[j];
            if(prices[j] > max) {
                max = prices[j];
                lowest = 101; //reset lowest since our 'sell' date is now 'before' buy
            }
            
            int temp = max - lowest;
            if (temp > profit)
                profit = temp;
        }

        return profit;
    }
};
