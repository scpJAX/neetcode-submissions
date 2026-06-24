class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        #brute force, nested loop. only use if arr small and memory usage 
        #use hash map. if target - current value at index exists in hash map we have our answer, otherwise insert
        hash_map = {}
        for index, num in enumerate(nums):
            result = target - num
            if result in hash_map:
                return [hash_map[result], index]
            else :
                hash_map[num] = index






        