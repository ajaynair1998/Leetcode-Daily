# Solution 1
# Time - O(n logn) | Space - O(n)

# This Solution cant be implemented if indices should be returned
def TwoSum(array, target):
    array.sort()
    left, right = 0, len(array) - 1
    while left < right:
        current_sum = array[left] + array[right]
        
        if current_sum < target:
            left += 1
        elif current_sum > target:
            right -= 1
        else:
            return [ array[left], array[right] ]
        

# Solution 2
# Time - O(n) | Space - O(n)

def TwoSum(array, target):
    lookup = {}
    for index, value in enumerate(array):
        if target - value in lookup:
            return lookup[ index, lookup[target - value] ]
        
        lookup[value] = index
        
    
    


  
