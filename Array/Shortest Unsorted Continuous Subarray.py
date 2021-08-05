# Solution
# Time O(N) | Space O(1)

def findUnsortedSubArray(nums):
    if len(nums) == 1: return 0
    
    small, big = float('inf'), float('-inf')
    for i in range(len(nums)):
        if unsorted(nums, i):
            small = min(small, nums[i])
            big = max(big, nums[i])
            
    if small == float('inf'):
        return 0
    
    l, r = 0, len(nums) - 1
    while small >= nums[l]:
        l += 1
    while big <= nums[r]:
        r -= 1
        
    return r - l + 1

def unsorted(nums, i):
    if i == 0:
        return nums[i] > nums[i + 1]
    if i == len(nums) - 1:
        return nums[i - 1] > nums[i]
    return nums[i] > nums[i + 1] or nums[i - 1] > nums[i]
