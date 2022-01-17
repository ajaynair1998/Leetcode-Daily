function searchInRotatedArray(nums,target)
{

    // we will use binary search

    let left=0
    let right=nums.length-1
    let mid
    

    // basic principle is 
    // one side of the mid point will be uniformly increasing since the array is rotated

    while (left <= right)
    {
        mid =Math.floor((left+right)/2)
        console.log(mid)
        // if the current mid is on target
        if(nums[mid] === target)
        {
            return mid
        }

        // if left is uniform
        else if(nums[left] <= nums[mid])
        {
            if(target >= nums[left] && target <=nums[mid])
            {
                right =mid -1
            }
            else
            {
                left = mid +1
            }
        }

        else 
        {
            if(target<=nums[right] && nums[mid] < target)
            {
                left=mid+1
            }
            else
            {
                right=mid-1
            }
        }
        
    }
    return -1
}

console.log(searchInRotatedArray([1,3],1))