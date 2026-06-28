class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        if (nums.size() == 0) { return 0;}
        sort(nums.begin(), nums.end());

        int result = 0;
        int firstResult = 1;
        for (int i = 1; i < nums.size(); i++) {
            if (1 == nums[i] - nums[i-1]){
                firstResult++;
            } 
            else if(nums[i-1] == nums[i]) {continue;}
            else {
                if (firstResult >= result) {
                    result = firstResult;
                    firstResult=1;
                }
            }
        }
        return max(firstResult, result);
    }
};
