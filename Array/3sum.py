# Solution 
# Time O(n^2) | Space O(n)

def 3sum(array):
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        l, r = i + 1, len(nums) - 1
        while l < r:
            currentSum = nums[i] + nums[l] + nums[r]
            if currentSum < 0:
                l += 1
            elif currentSum > 0:
                r -= 1
            else:
                result.append( [nums[i], nums[l], nums[r] )
                while l < r and nums[l] == nums[l + 1]:
                    l += 1
                while l < r and nums[r] == nums[r - 1]:
                    r -= 1
                r += 1
                l -= 1
                
    return result
