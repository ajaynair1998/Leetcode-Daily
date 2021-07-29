# Solution
# Time O(n) | Space O(1)

def IsSubsequence(small, big):
    p = 0 
    for char in big:
        if p == len(small):
            break
        
        if small[p] == char:
            p += 1
            
    return p == len(small)
