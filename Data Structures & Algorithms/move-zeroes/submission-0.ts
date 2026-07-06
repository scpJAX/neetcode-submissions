class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let left = 0;
        let right = 0;
        while (right < nums.length){
            if(nums[left] === 0 && nums[right] !== 0){
                let temp = nums[left];
                nums[left] = nums[right]
                nums[right] = temp
            }
            if(nums[left] !== 0)
                left++;
            right++;
        }
    }
}
