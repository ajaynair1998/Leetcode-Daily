function sameTree(p,q)
{
   if(!p && !q) return true
    
    if((p === null && q) || (q===null && p)) return false
    
   if(!p.left && q.left  || p.left && !q.left) return false

   if(!p.right && q.right || p.right && !q.right)return false

    if(p.val != q.val)return false
   
    return (isSameTree(p.left,q.left) && isSameTree(p.right,q.right))

    return false

   
   
}

