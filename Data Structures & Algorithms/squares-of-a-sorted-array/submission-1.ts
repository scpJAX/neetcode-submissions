class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        if(nums.length === 0){
            return nums
        }
        let squared : number[] = [];
        let left: number = 0;
        let right: number = nums.length - 1;
        while(left <= right){
            //see if left squared is greater than right squared
            let leftSqrd = nums[left] * nums[left];
            let rightSqrd = nums[right] * nums[right];
            if(left === right){
                squared.unshift(leftSqrd);
                left += 1;
            }
            else if(leftSqrd >= rightSqrd){
                squared.unshift(leftSqrd);
                left += 1;
            }
            else {
                squared.unshift(rightSqrd);
                right -= 1;
            }
        }

        return squared;
    }
}
