class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        //non heap
        let hashMap = new Map<number, number>();
        for(let i = 0; i < nums.length; i++){
            if(hashMap.has(nums[i])){
                hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
            } else {
                hashMap.set(nums[i], 1);
            }
        }

        let count = [];
        count = Array.from(hashMap.entries());
        count = count.sort((a,b) => b[1] - a[1]);

        let result = [];
        for(let i = 0; i < k; i++){
            result.push(count[i][0])
        }

        return result;
    }
}
