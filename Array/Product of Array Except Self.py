# Solution 1
# Time O(n) | Space O(n)

def ProductExceptSelf(array):
    dp = [1] * len(array)
    
    product_left = 1
    for i in range(1, len(array)):
        product_left *= array[i - 1]
        dp[i] *= product_left
    
    product_right = 1 
    for i in reversed(range(len(array) - 1)):
        product_right *= array[i + 1]
        dp[i] *= product_right
        
    return dp
  
