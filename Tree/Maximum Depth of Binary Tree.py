# Solution - Recursive
# Time O(N) | Space O(N)

def maxDepth(root):
    if not root:
        return 0
    
    left = maxDepth(root.left)
    right = maxDepth(root.right)
    
    return 1 + max(left, right)

# Solution - Iterative 
# Time O(N) | Space O(N)

def maxDepth(root):
    if not root:
        return 0
    
    stack = [(root, 1)]
    depth = 1
    while stack:
        node, cur = stack.pop()
        depth = max(depth, cur)
        if node.left:
            stack.append((node.left, cur + 1))
        if node.right:
            stack.append((node.right, cur + 1))
            
    return depth
        
        
