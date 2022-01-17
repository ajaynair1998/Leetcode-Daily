function isSubsequence(s,t)
{
    let elementOfS=0
    let elementOfT=0

    // edge case - > empty string
    if(s=='')
        return true
    
    while (elementOfS < s.length && elementOfT < t.length)
    {
        if(s[elementOfS]=== t[elementOfT])
        {
            elementOfS++
            elementOfT++
        }

        else
        {
            elementOfT++
        }
    }

    if (elementOfS==s.length)
    {
        return true
    }
   
    return false

}

console.log(isSubsequence( "b","abc"))