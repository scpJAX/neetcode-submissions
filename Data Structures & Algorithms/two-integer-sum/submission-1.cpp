class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        //brute force would be nested for loop but we can use a hash map 
        unordered_map <int, int> result;    //key will be value at index for easier lookup
        for(int i = 0; i < nums.size(); i++){
            int num = target - nums[i];
            if (result.find(num) != result.end()) {
                //we found it return indexes
                return {result[num], i};
            }
            else {
                //didn't find so insert 
                result.insert({nums[i], i});
                //result[i] = nums[i]
            }
        }
        return {};
    }
};
