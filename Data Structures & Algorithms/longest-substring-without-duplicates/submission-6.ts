class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxLength: number = 0;
        let left : number = 0;
        let hashMap = new Map<string, number>();

        for (let i = 0; i < s.length; i++){
            if(hashMap.has(s[i]) && hashMap.get(s[i]) >= left){
                left = hashMap.get(s[i]) + 1
            }
            hashMap.set(s[i], i);
            if(maxLength < (i-left) + 1)
                maxLength = (i-left)+1;
        }

        return maxLength;
    }
}
