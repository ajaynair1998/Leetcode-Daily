function longestMountain(arr)
{
    let walkPointer=1
    let currentLongestMountain=0

    // for storing values when we get to a peak point
    let peak

    while(walkPointer < arr.length -1)  //we will walk only till second last point 
    {

        // if this condition is satisfied we have reached a peak value
        if(arr[walkPointer -1 ] < arr[walkPointer]  &&  arr[walkPointer + 1] < arr[walkPointer])
        {
            
            // the peak index we have arrived at
            peak=walkPointer


            // Now walk on both sides to count the length on each side
            currentLongestMountain=Math.max(walkDownbothSides(peak,arr),currentLongestMountain)

            // increment the walk pointer then
            walkPointer++
        }

        //  if the current index is not on a peak value got to the next position
        else
        {
            walkPointer++

        }
        
    }
    return currentLongestMountain


}

// This function walks down both sides to get the total length of the mountain
function walkDownbothSides(peak,arr)
{   
    // walk right and left starting from the peak
    let leftWalk=peak
    let rightWalk=peak

    // store the length of the current mountain
    let mountainLength=0

    // walking to the left side
    while(arr[leftWalk - 1] < arr[leftWalk]   && leftWalk > 0)
    {
        // debug
        console.log('left strides-',leftWalk)
        mountainLength++
        leftWalk--
    }

    // walking to the right side
    while(arr[rightWalk + 1] < arr[rightWalk] && rightWalk < arr.length-1)
    {
        // debug
        console.log('right strides-',rightWalk)
        mountainLength++
        rightWalk++
    }

    // since we have to add the peak to the length we have to add 1
    return mountainLength + 1
}

console.log(longestMountain([2,1,4,7,3,2,5]))