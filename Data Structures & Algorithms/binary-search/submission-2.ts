class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let low: number = 0;
        let high: number = nums.length;
        if(high === 1 && nums[0] === target)
            return 0;

        while (low <= high){
            let mid: number = Math.trunc((low+high) / 2);
            if(nums[mid] === target)
                return mid;
            else if (nums[mid] < target)
                low = mid + 1;
            else 
                high = mid - 1;
        }

        return -1;
    }
}
