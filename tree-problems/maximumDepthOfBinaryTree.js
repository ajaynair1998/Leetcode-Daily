function maximumDepth(root)
{
    
    return traverse(root,0)
}

function traverse(root,currentLength)
{
    if(!root)return currentLength

    if(root.left === null )
    {
        return traverse(root.right,currentLength+1)
    }

    if(root.right === null )
    {
        return traverse(root.left,currentLength+1)
    }

    let leftBranch=traverse(root.left,currentLength+1)
    let rightBranch=traverse(root.right,currentLength+1)

    return Math.max(leftBranch,rightBranch)
}