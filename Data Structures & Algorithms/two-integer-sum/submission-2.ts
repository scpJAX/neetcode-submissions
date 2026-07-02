class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap = new Map<number, number>();
        hashMap.set(nums[0], 0);

        for(let i = 1; i < nums.length; i++){
            let x = target - nums[i];
            if(hashMap.get(x) === undefined){
                hashMap.set(nums[i], i);
            }
            else {
                return [hashMap.get(x), i];
            }
        }

        return [];
    }
}
