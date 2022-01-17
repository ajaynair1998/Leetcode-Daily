function minAreaRect(points)
{
    let map=new Map()

    // ADD ALL THE POINTS TO A HASH MAP
    for (let [xpoint,ypoint] of points)
    {
        if(map.has(xpoint))
        {
            map.get(xpoint).add(ypoint)
        }
        else
        {
            map.set(xpoint,new Set())
            map.get(xpoint).add(ypoint)
        }
    }

    let minimum=Number.MAX_SAFE_INTEGER
    // Compare each point in the points array to each other point to find out wherther they are diagonals

    for(let [x1,y1] of points)
    {
        for(let [x2,y2] of points)
        {
            // if not diagonals
            if(x1===x2  || y1===y2)
            {
                continue
            }

            if(map.get(x1).has(y2)  && map.get(x2).has(y1))
            {
                // get current 
                minimum=Math.min(minimum,(Math.abs(x1-x2) * Math.abs(y1-y2)))
            }
        }
    }

    return minimum === Number.MAX_SAFE_INTEGER ? 0 : minimum
}

console.log(minAreaRect([[1,1],[1,3],[3,1],[3,3],[2,2]]))