# Solution
# Time O(n ^ 2) | Space O(1)

def threeSumCLosest(array, target):
    array.sort()
    res = float('inf')
    for i in range(len(array) - 2):
        l, r = i + 1, len(nums) - 1
        while l < r:
            currentSum = array[i] + array[l] + array[r]
            newDifference = abs(target - currentSum)
            currentDifference = abs(target - res)
            res = currentSum if newDifference < currentDifference else res
            if currentSum < target:
                l += 1
            elif currentSum > target:
                r -= 1
            else:
                return res
            
    return res

# This can also be done Using Binary Search
        
