class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        //each string has a common sorted value, each char represents int ASCII value
        //so loop through strs & sort each string,
        //sorted string is the key, value will be the original string
        unordered_map<string, vector<string>> sortedStrings;
        for(auto str : strs) {
            string sorted = str;
            sort(sorted.begin(), sorted.end());

            sortedStrings[sorted].push_back(str);
        }

        //we have unordered map, we need to return vector<vector<string>> which is value of map
        //loop through map and push the value from map into our result vector
        vector<vector<string>> result;
        for (auto x: sortedStrings) {
            result.push_back(x.second);
        }

        return result;
    }
};
