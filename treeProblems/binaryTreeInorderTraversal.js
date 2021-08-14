
// iterative method
function inorderTraversalIteratively(root)
{
    let stack=[]
    let finalResult=[]

    let currentNode

    while(root || stack.length)
    {
        while (root)
        {
            stack.push(root)
            root=root.left
        }

        currentNode=stack.pop()
        finalResult.push(currentNode.val)
        root=currentNode.right
    }

    return finalResult
}



// recursive method
function inorderRecursively(root)
{
    let finalResult=[]
    traverse(root,finalResult)
    return finalResult
}

function traverse(root,finalResult)
{
    if(!root)
    {
            return
    }
    else
    {
        traverse(root.left,finalResult)
        finalResult.push(root.val)
        traverse(root.right,finalResult)
    }

}