function preOrderIterative(root)
{
    let stack=[]
    let finalResults=[]
    // let currentNode

    while(root || stack.length)
    {
        while(root)
        {
        stack.push(root.right)
        finalResults.push(root.val)
        root=root.left

        }

        root=stack.pop()


    }

    return finalResults

}

// preOrder Recursive
function preOrderRecursive(root)
{
    let finalResults=[]
    traverse(root,finalResults)
    return finalResults
}

function traverse(root,finalResults)
{
    if(!root)
    {
        return 
    }
   
    finalResults.push(root.val)
    traverse(root.left,finalResults)
    traverse(root.right,finalResults)

}