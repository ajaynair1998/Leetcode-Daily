# Solution 1
# Tiem O(n logn ) | Space O(1)
def ContainsDuplicate(array):
    array.sort()
    for i in range(1, len(array)):
        if array[i] == array[i - 1]:
            return True
        
    return False

# Solution 2
# Time O(n) | Space O(n)
def ContainsDuplicate(array):
    dic = set()
    for value in array:
        if value in dic:
            return True 
        dic.add(value)
        
    return False
  
