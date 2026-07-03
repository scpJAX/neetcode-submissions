class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let longestSize : number = 0;
        let set = new Set<string>();

        for(let char of s){
            while(set.has(char)){
                const firstElement = set.values().next().value;
                set.delete(firstElement);
            }
            set.add(char);
            if (set.size > longestSize)
                longestSize = set.size;
        }

        return longestSize;
    }
}
