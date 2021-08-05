function minimumInRotatedArray(nums)
{
	let left=0
	let right=nums.length-1
	let mid

	// if there is only one element
	if(nums.length === 1)
	{
		return nums[0]
	}


	if(nums[left] < nums[right])
		{
			// This means the array has no rotation 
			// it is already sorted
			return nums[left]
		}

	while(left<=right)
	{
		mid=Math.floor((left+right)/2)

		

		if(nums[mid] > nums[mid + 1])
		{
			return nums[mid + 1]
		}

		if(nums[mid] < nums[mid -1 ] )
		{
			return nums[mid]
		}

		if (nums[mid] > nums[left])
		{
			left = mid +1
		}

		else
		{
			right=mid-1
		}


	}
}