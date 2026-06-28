class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_set<char> substr;
        int left, result = 0;

        for(int right = 0; right < s.size(); right++){
            while(substr.contains(s[right])){
                substr.erase(s[left]);
                left++;
            }
            substr.insert(s[right]);
            result = max(result, right-left+1);
        }

        return result;
    }
};
