class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxLength: number = 0;
        let set = new Set<string>();

        for (let char of s){
            while(set.has(char)){
                //delete the first element of the set
                const firstElement = set.values().next().value;
                set.delete(firstElement);
            }
            set.add(char);
            if(maxLength < set.size)
                maxLength = set.size
        }

        return maxLength;
    }
}
