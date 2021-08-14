# Solution - Recursive
# Time O(N) | Space O(N)

def PreOrder(root):
    res = []
    helper(root, res)
    return res

def helper(root, res):
    if not root:
        return
    res.append(root.value)
    helper(root.left, res)
    helper(root.right, res)
    
# Solution - Iterative with Stack
# Time O(N) | Space O(N)

def PreOrder(root):
    res = []
    stack = [root]
    while stack:
        cur = stack.pop()
        if not cur:
            continue
            
        res.append(cur.value)
        if cur.right:
            stack.append(cur.right)
        if cur.left:
            stack.append(cur.left)
            
    return res







