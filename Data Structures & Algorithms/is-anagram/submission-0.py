class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        hash_map_s = {};
        hash_map_t = {};

        if len(s) != len(t):
            return False;

        for i in range(len(s)) :
            if s[i] in hash_map_s:
                hash_map_s[s[i]] += 1
            else :
                hash_map_s[s[i]] = 1
            if t[i] in hash_map_t:
                hash_map_t[t[i]] += 1
            else :
                hash_map_t[t[i]] = 1

        for key, value in hash_map_s.items():
            if key in hash_map_t:
                if value != hash_map_t[key]:
                    return False;
            else :
                return False;

        #if hash_map_s & hash_map_t have exact key, value groupings then true else false

        return True;
        