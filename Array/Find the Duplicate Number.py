# Solution 1 
# Time O(n) | Space O(1)

def FindDuplicate(array):
    for value in array:
        val = abs(value)
        if array[val] < 0:
            return val
        array[val] *= -1
        
    return -1


# Solution 2 - Cycle Detection
# Time O(n) | Space O(1)

def FindDuplicate(array):
    fast = slow = array[0]
    while True:
        slow, fast = array[slow], array[array[fast]]
        if fast == slow:
            break
            
    slow = array[0]
    while fast != slow:
        slow = array[slow]
        fast = array[fast]
        
    return slow
        
    
  
