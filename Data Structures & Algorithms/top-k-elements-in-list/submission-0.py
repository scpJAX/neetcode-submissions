class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        hash_map = {} #store the count of each element
        count = [[] for i in range(len(nums)+1)]   #max size will be szie of input arr
        
        for n in nums:
            hash_map[n] = 1 + hash_map.get(n, 0)
        
        for n, i in hash_map.items():
            count[i].append(n)

        result = [];
        for i in range(len(count) -1, 0, -1):    #start from the 'end' which will have highest count
            for n in count[i]:
                result.append(n)
                if len(result) == k:
                    return result;
        