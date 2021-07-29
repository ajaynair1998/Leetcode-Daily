# Solution 1 - Kadanes Algorithm
# Time O(n) | Space O(1)

def maxSubarray(array):
    maximum_Sum = float('-inf')
    current_Sum = 0
    
    for value in array:
        current_Sum = max(value, current_Sum + value)
        maximum_Sum = max(maximum_Sum, current_Sum)
        
    return maximum_Sum

