class Solution {
public:
    bool isAnagram(string s, string t) {
        unordered_map<char, int> sMap;
        unordered_map<char, int> tMap;

        if (s.length() != t.length())
            return false;

        for (int i = 0; i < s.length(); i++){
            //if in sMap incrememnt value else add to map
            if(sMap.find(s[i]) != sMap.end())
                sMap[s[i]] += 1;
            else 
                sMap.insert({s[i], 1});

            //if in tMap increment value else add to map
            if(tMap.find(t[i]) != tMap.end())
                tMap[t[i]] += 1;
            else 
                tMap.insert({t[i], 1});
        }

        for (const auto& [key, value] : sMap) {
            if(tMap.find(key) != tMap.end()) {
                if (tMap[key] != value)
                    return false;
            }
            else {
                return false;
            }

        }
        return true;
    }
};
