# Solution 
# Time O(n) | Space O(n)

def SortedSquares(array):
    res = []
    l, r = 0, len(array) - 1
    
    while l <= r:
        val1, val2 = array[l] ** 2, array[r] ** 2
        if val1 > val2:
            res.append(val1)
            l += 1
        else:
            res.append(val2)
            r -= 1
            
    return res[::-1]
     
  
