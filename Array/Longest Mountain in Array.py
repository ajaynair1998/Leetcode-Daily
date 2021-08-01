# Solution
# Time O(N) | Space O(1)

def LongestMountain(array):
    if len(array) < 3: return 0
    
    longest = 0
    for i in range(1, len(array) - 1):
        if array[i - 1] < array[i] > arrau[i + 1]:
            currentLength = getLength(array, i - 1, i + 1)
            longest = max(longest, currentLength)
            
    return longest

def getLength(array, left, right):
    while left >= 0 and array[left] < array[left + 1]:
        left -= 1
    
    while right < len(array) and array[right] < array[right - 1]:
        right += 1
        
    left += 1; right -= 1 # Done because after while loop the pointer move one extra index
    
    return right - left + 1
