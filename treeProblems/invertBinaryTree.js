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
    let temp=root.left

    root.left=root.right
    root.right=temp
    return root
}