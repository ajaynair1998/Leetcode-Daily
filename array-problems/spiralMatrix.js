function spiralMatrix(matrix)
{
    let topEdge=0
    let rightEdge=matrix[0].length 
    let bottomEdge=matrix.length 
    let leftEdge=0

    // Array to store final result
    let finalArray=[]

    while(topEdge < bottomEdge &&  leftEdge < rightEdge)
    {

        // get the values from top most Row
        for (let i =leftEdge; i<rightEdge ; i++)
        {
            
            finalArray.push(matrix[topEdge][i])

            
        }
        topEdge++

        // get the values from the rightMost coloumn
        for (let i =topEdge;i<bottomEdge;i++)
        {
            finalArray.push(matrix[i][rightEdge - 1])

        }
        rightEdge--

        // get the bottom Edge values
        for(let i=rightEdge-1 ;i>=leftEdge;i--)
        {
            if(topEdge !== bottomEdge)
            { 

            //do only if our bottom-most row != the top-most row that we just did this iteration
            finalArray.push(matrix[bottomEdge-1][i])
            
            }

        }

        bottomEdge--

        // get the left most edge values
        for (let i=bottomEdge-1;i>=topEdge;i--)
        {
            if (rightEdge !== leftEdge )
            { 
            //do only if our left-most column != the right-most column that we just did this iteration
            finalArray.push(matrix[i][leftEdge]);
            

            }
        }

        leftEdge++


    }
    return finalArray
}

console.log(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))