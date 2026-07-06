class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let result = new Map<string, string[]>();

        for (let s of strs){
            let count : number[] = new Array(26).fill(0);

            for(let c of s){
                let i = c.charCodeAt(0);
                count[i - 97] += 1;
            }
            if(result.has(count.join(',')))
                result.get(count.join(',')).push(s);
            else 
                result.set(count.join(','), [s])
        }

        return Array.from(result.values());
    }
}
