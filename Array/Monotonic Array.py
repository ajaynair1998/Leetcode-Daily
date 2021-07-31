# Solution - One Pass
# Time O(N) | Space O(1)

def isMonotonic(array):
    # Initially we assume the array is both increasing and decreasing which is not possible
    isIncreasing, isDecreasing = True, True
    
    for i in range(1, len(array)):
        if array[i] > array[i - 1]:
            isDecreasing = False
        
        if array[i] < array[i - 1]:
            isIncreasing = False
            
    return isIncreasing or isDecreasing
  
