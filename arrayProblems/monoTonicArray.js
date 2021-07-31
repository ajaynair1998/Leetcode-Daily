function monotonicArray(nums)
{
    // So to find if monotone we will keep in referance a value 0
    // if array is monotone it will be monotone for nums.length times

    let isMontoneNtimes=0
    let currentValue
    let previousValue
    let numberOfTimes=nums.length

    for(let currentIndex=1;currentIndex < nums.length;currentIndex++)
    {
        currentValue=nums[currentIndex]
        previousValue= nums[currentIndex-1]

        if(currentValue > previousValue)
        {
            isMontoneNtimes++
        }

        else if(currentValue < previousValue)
        {
            isMontoneNtimes--
        }
        else
        {
            numberOfTimes--
        }
    }
    console.log(isMontoneNtimes)
    if((Math.abs(isMontoneNtimes) + 1) !== numberOfTimes)
    {
        return false
    }
    else
    {
        return true
    }
}