# Solution - Recursive

def PostOrder(root):
    res = []
    helper(root, res)
    return res

def helper(root, res):
    if not root:
        return
    
    helper(root.left, res)
    helper(root. right, res)
    res.append(root.value)
    

# Solution - Iterative with Stack

def PostOrder(root):
    res, stack = [], [root]
    while stack:
        node = stack.pop()
        if not node:
            continue
            
        res.append(node.value)
        stack.append(node.left)
        stack.append(node.right)
        
    return res




