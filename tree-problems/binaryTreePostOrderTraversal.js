function postOrderTraversalIterative(root)
{
    let finalResults=[]
    let stack=[root]
    

    let currentNode

    while(stack.length)
    {
        // keep taking the top most node on stack1 and push the element to stack1
        // and push it's children into stack2
       
        
            currentNode=stack.pop()
            
            if(currentNode === null)
            {
                continue
            }
            finalResults.push(currentNode.val)
            stack.push(currentNode.left)
            stack.push(currentNode.right)

        }
        
            
        
    return finalResults.reverse()
}


function postOrderRecursive(root)
{
    let finalResults=[]

    const traverse = (root) =>
    {
        if(!root)return

        traverse(root.left)
        traverse(root.right)
        finalResults.push(root.val)
    }
    traverse(root)
    return finalResults
    

}

