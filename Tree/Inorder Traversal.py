# Solution - Reursive
# Time - O(N) | Space - O(N)

def InOrder(root):
    res = []
    helper(root, res)
    return res

def helper(root, res):
    if not root:
        return
    
    helper(root.left, res)
    res.append(root.value)
    helper(root.right, res)
    
    
# Solution - Iterative with Stack
# Time O(N) | Space O(N)

def Inorder(root):
    res = []
    stack = []
    while root or stack:
        while root:
            stack.append(root)
            root = root.left
            
        cur = stack.pop()
        res.append(cur.value)
        root = cur.right
        
    return res

# Solution - Morris Traversal
# Time O(N) | Space O(1)

def Inorder(root):
    # For Later
   

