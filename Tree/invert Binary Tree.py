# Solution - Recursive
# Time O(N) | Space O(d)

def invertTree(root):
    if not root:
        return
    
    root.left, root.right = invertTree(root.right), invertTree(root.left)
    
    return root

# Solution - Reursive
# Time O(N) | Spcae O(d)

def invertTree(root):
    if not root:
        return
    
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    
    return root

# Solution - Iterative
# Time O(N) | Space O(N)

def invertTree(root):
    queue = [root]
    while queue:
        node = queue.pop(0)
        if not node:
            continue
            
        node.left, node.right = node.right, node.left
        queue.append(node.left)
        queue.append(node.right)
        
    return root

