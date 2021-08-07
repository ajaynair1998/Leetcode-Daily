# Solution ---> Left - Right Pass
# Time  - O(n)  |  Space -  O(n)

def MinRewards(nums):
    res = [1] * len(nums)
    for i in range(1,len(nums)):
        if nums[i] > nums[i-1]:
            res[i] = res[i-1] + 1

    for i in reversed(range(len(nums) - 1)):
        if nums[i] > nums[i+1]:
            res[i] = max(res[i], res[i+1]+1)

    return sum(res)
