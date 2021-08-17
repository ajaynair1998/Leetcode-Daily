function pathSum(root,targetSum)
{
    return traverse(root,targetSum)
}

function traverse(root,targetSum)
{
    if(!root) return false

    // this condition should satisfy only
    // if the sum is satisfied at leaf node
    if(root.left=== null && root.right ===null)
    {
    if(targetSum-root.val === 0) return true
    return false
    }

    let leftBranch=traverse(root.left,targetSum-root.val)
    let rightBranch=traverse(root.right,targetSum-root.val)

    if(leftBranch || rightBranch)return true
    return false
    
}