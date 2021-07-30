# Solution 
# Time O(n) | Space O(1)

def MoveZeroes(array):
    idx = 0 
    for i in range(len(array)):
        if array[i] != 0:
            array[i], array[idx] = array[idx], array[i]
            
    return array
