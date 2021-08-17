# Solution - Recursive
# Time - O(N) | Space - O(N)

def PathSum(root, target):
    return helper(root, 0, target)

def helper(root, curSum, target):
    if not root:
        return False
    
    curSum += root.value
    if not root.left and root.right:
        if curSum == target:
            return True
        
    return helper(root.left, curSum, target) or helper(root.right, curSum, target)
        
    
# Solution - Iterative
# Time O(N) | Space O(N)

def pathSum(root, target):
    if not root:
        return False
    
    stack = [(root, root.val)]
    while stack:
        node, curSum = stack.pop()
        if not node.left and not node.right:
            if curSum == target:
                return True
            
        if cur.left:
            stack.append((node.left, node.left.val + curSum))
        if cur.right:
            stack.append((node.right, node.right.val + curSum))
            
    return False
    



