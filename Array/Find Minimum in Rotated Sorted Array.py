# Solution

def findMin(nums):
    if len(nums) == 1:
        return nums[0]
    
    left, right = 0, len(nums) - 1
    
    #if first element is smaller than last element, it means sorted
    if nums[left] < nums[right]:
        return nums[left]
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] > nums[mid + 1]:
            return nums[mid + 1]
        if nums[mid] < nums[mid - 1]:
            return nums[mid]
        
        if nums[mid] > nums[left]:
            left = mid + 1
        else:
            right = mid - 1
            
