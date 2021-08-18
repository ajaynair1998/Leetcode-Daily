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

# Solution - Iterative 
# Tiem O(N) | Space O(N)

def minDepth(root):
    if not root:
        return 0
    stack = [(root, 1)]
    while stack:
        node, depth = stack.poop(0)
        if not node.left and not node.right:
            return depth
        
        if node.left:
            stack.append((node.left, depth + 1))
            
        if node.right:
            stack.append((node.right, depth + 1))
            
            
