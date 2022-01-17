function mergeIntervals(intervals)
{
    // first sort the array in ascending order by first element in each interval
    intervals = intervals.sort((a,b) =>  a[0] - b[0])
    
    let previousInterval=intervals[0]
    let currentInterval

    let finalIntervals=[]
    
    for (let current=0;current < intervals.length;current++)
    {
        currentInterval=intervals[current]

        if(currentInterval[0] <= previousInterval[1])
        {
            previousInterval=[previousInterval[0],Math.max(currentInterval[1],previousInterval[1])]

        }
        else
        {
            finalIntervals.push(previousInterval)
            previousInterval=currentInterval
        }

    }

    finalIntervals.push(previousInterval)

    return finalIntervals
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))