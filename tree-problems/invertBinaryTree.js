function invertBinaryTree(root)
{
    return traverse(root)
}

function traverse(root)
{
    if(!root)return null

    let leftSide=traverse(root.left)
    let rightSide=traverse(root.right)
    
    return swap(root)
}

function swap(root)
{
    [root.left,root.right]=[root.right,root.left]
    return root
}




