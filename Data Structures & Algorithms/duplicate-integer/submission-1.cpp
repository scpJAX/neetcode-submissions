class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        unordered_map<int, int> map;
        //nums[i], frequency
        for(int i = 0; i < nums.size(); i++) {
            if(map.find(nums[i]) != map.end())
                return true;
            else {
                map.insert({nums[i], 1});
            }
        }
        return false;
    }
};