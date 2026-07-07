class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefixList: number[] = [];
        let postfixList: number[] = Array(nums.length).fill(0);
        let prefix = 1;
        for(let i = 0; i < nums.length; i++){
            prefixList.push(prefix);
            prefix = prefix * nums[i];
        }
        let postfix = 1;
        for(let i = nums.length -1; i >= 0; i--){
            postfixList[i] = postfix;
            postfix = postfix * nums[i];
        }
        let result: number[] = [];
        for(let i = 0; i < postfixList.length; i++){
            result[i] = prefixList[i] * postfixList[i];
        }

        return result;
    }
}
