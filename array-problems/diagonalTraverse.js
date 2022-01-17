
// Using hashmap
function findDiagonalOrder(mat)
{
    // to store the diagonals
    let map={}
    // final array to store diagonal
    let finalArray=[]

    for (let i=0;i<mat.length;i++)
    {
        for (let j=0;j<mat[0].length;j++)
        {
            if(map[i+j])
            {
                map[i+j].push(mat[i][j])
            }
            else
            {
                map[i+j] = [mat[i][j]]
            }
        }
    }
    console.log(map)

    for(let diagonal in map)
    {   
        if(diagonal % 2 === 0)
        {
            map[diagonal].reverse().forEach(item => finalArray.push(item) )
        }
        else
        {
        map[diagonal].forEach(item => finalArray.push(item) )
        }
    }

    return finalArray
    
}

// without hashmap
findDiagonalOrderWithoutHashMap(mat)
{
    // Do Later
}

console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))