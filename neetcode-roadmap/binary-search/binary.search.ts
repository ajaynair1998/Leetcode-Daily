function search(nums: number[], target: number): number {
	let leftPointer = 0;
	let rightPointer = nums.length - 1;

	while (leftPointer <= rightPointer) {
		const mid = Math.floor((leftPointer + rightPointer) / 2);
		const valueAtMid = nums[mid];

		if (target === valueAtMid) {
			return mid;
		} else if (valueAtMid < target) {
			leftPointer = mid + 1;
		} else if (valueAtMid > target) {
			rightPointer = mid - 1;
		}
	}

	return -1;
}
