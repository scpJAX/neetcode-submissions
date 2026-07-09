class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let set = new Set<number>();

        for(let n of nums){
            if(set.has(n)){
                return true; // we have duplicate
            }
            else {
                set.add(n);
            }
        }
        return false;
    }
}
