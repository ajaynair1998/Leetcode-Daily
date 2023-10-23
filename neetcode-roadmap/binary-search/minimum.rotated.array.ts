function findMin(nums: number[]) {
	let leftPointer = 0;
	let rightPointer = nums.length - 1;
	let currentMinimum = nums[0];

	while (leftPointer <= rightPointer) {
		const valueAtLeft = nums[leftPointer];
		const valueAtRight = nums[rightPointer];

		if (valueAtLeft <= valueAtRight) {
			return Math.min(currentMinimum, valueAtLeft);
		}

		const mid = Math.floor((leftPointer + rightPointer) / 2);
		const valueAtMid = nums[mid];

		if (valueAtLeft <= valueAtMid) {
			currentMinimum = Math.min(valueAtLeft, currentMinimum);
			leftPointer = mid + 1;
		} else {
			currentMinimum = Math.min(valueAtMid, currentMinimum);
			rightPointer = mid - 1;
		}
	}

	return currentMinimum;
}
