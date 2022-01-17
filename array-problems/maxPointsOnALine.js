function maxPoints(points)
{
    
    //     if there is only one point
    if(points.length === 1)
        {
            return 1
        }
    
    
    // temporary variable to store slope in each iteration
    let currentSlope
    // temporary variable to store the maximum point slope
    let maxPointSlope=0
    for (let i=0;i<points.length-1;i++)
    {
        // object to store the number of points having the same slope
        let slopes={}

        for(let j=i+1;j<points.length;j++)
        {
            currentSlope=slope(points[i],points[j])       

            // a slope value will atleast be made up of two points
            slopes[currentSlope] ? slopes[currentSlope]++ : slopes[currentSlope] = 2

            maxPointSlope=Math.max(maxPointSlope,slopes[currentSlope])
        }
        // for debug
        console.log(slopes)
    }

    
    return maxPointSlope



}

// function to find slope of two points
function slope(p1,p2)
{
    let [x1,y1] =[...p1]
    let [x2,y2] =[...p2]

    let xdiff=x2-x1
    let ydiff=y2-y1

    if(xdiff === 0) 
    {
        return 'vertical line'
    }

    if(ydiff === 0)
    {
        return 'horizontal line'
    }

    let diviser=gcd(xdiff,ydiff)

    // store the slope as fraction since javascript isnt good with decimals
    xdiff=xdiff/diviser
    ydiff=ydiff/diviser

    return `${xdiff}/${ydiff}`
}

function gcd(a,b)
{
    if(b===0)
    {
        return a
    }
    else
    {
        return gcd(b,a%b)
    }
}

console.log(maxPoints([[1,1],[2,2],[3,3]]))