class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        #same concept as c++ we want to sort the strings to get the common anagram and store the orig
        sorted_strings = {} #our hash map
        for s in strs:
            sortedStr = s
            sortedStr = "".join(sorted(sortedStr))
            if sortedStr not in sorted_strings:
                sorted_strings[sortedStr] = [s]
            else :
                sorted_strings[sortedStr].append(s)

        #then return list of sorted anagrams
        return list(sorted_strings.values())