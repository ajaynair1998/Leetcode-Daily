# Solution
# Time O(N) | Space O(N)

def longestConsecutive(nums):
    lookup = { x:False for x in nums}
    sequence = 0
    for val in nums:
        if lookup[val]:
            continue
        lookup[val] = True
        left, right = val - 1, val + 1
        curSequence = 0
        
        while left in lookup:
            lookup[left] = True
            left -= 1
            curSequence += 1
            
        while right in lookup:
            lookup[right] = True
            right += 1
            curSequence += 1
            
        sequence = max(sequence, curSequence + 1)
        
    return sequence
            
        
       
