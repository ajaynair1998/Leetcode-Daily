# Solution - 
# Time O(n) | Space O(1)

def maxProduct(array):
    minProd, maxProd, result = 1, 1, float('-inf')
    
    for value in array:
        # We need TempMax since we cant change value of maxProd before computing the minProd
        tempMax = max(value, minProd * value, maxProd * value)
        minProd = min(value, minProd * value, maxProd * value)
        
        maxProd = tempMax
        result = max(result, maxProd)
        
    return result


# Logic --> Similar to Kadanes Algorithm, But here input may contains negative numbers
# so we need to compute the minimum Product because (minimum product * any negative number) could be a potential largest product

