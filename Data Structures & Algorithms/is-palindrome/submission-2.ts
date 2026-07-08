class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        function isAlphaNumeric(c: string){
            return /^[a-zA-Z0-9]+$/.test(c);
            
        }
        let left = 0;
        let right = s.length-1;

        while (left <= right){
            if(isAlphaNumeric(s[left]) && isAlphaNumeric(s[right])){
                if(s[left].toLowerCase() !== s[right].toLowerCase()){
                    return false;
                }
                else {
                    left += 1;
                    right -= 1;
                }
            }
            if (!isAlphaNumeric(s[left]))
                left += 1;
            if (!isAlphaNumeric(s[right]))
                right -= 1;
        }

        return true;
    }
}
