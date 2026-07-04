class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let minimumValue : number = nums[0];
        let low : number = 0;
        let high : number = nums.length - 1;

        while(low <= high){

            let mid : number = Math.trunc((low+high) / 2);
            if(nums[mid] < minimumValue){
                minimumValue = nums[mid];
            }
            else {
                if(nums[mid] >= nums[high]){
                    low = mid + 1;
                }
                else {
                    high = mid -1;
                }
            }
        }

        return minimumValue;
    }
}
