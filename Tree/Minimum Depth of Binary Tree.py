# Solution - Recursive
# Time O(N) | Space O(N)

def minDepth(root):
    if not root:
        return 0
    
    left = minDepth(root.left)
    right = minDepth(root.right)
    
    if not root.left or not root.right:
        return 1 + root.left + root.right
    
    return min(left, right) + 1
