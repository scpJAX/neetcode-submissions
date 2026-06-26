class Solution:
    def isPalindrome(self, s: str) -> bool:
        lowerCase = s.replace(" ", "").lower()
        i = 0
        j = len(lowerCase) -1
        while (i < j) :
            if not lowerCase[i].isalnum():
                i += 1
            if not lowerCase[j].isalnum() :
                j -= 1
            if lowerCase[i] != lowerCase[j]:
                return False
            i += 1
            j -= 1
        
        return True

        