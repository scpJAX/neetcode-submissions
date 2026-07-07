class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        let hashMap = new Map<number, number>();

        for(let i = 0; i < nums.length; i++){
            if(hashMap.has(nums[i])){
                let lastIndex = hashMap.get(nums[i]);
                if((i - lastIndex) <= k){
                    return true;
                }
                hashMap.set(lastIndex, i); //update the last index 
            }
            hashMap.set(nums[i], i);
        }

        return false;
    }
}
