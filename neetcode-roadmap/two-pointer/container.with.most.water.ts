function maxArea(height: number[]): number {
	let leftPointer = 0;
	let rightPointer = height.length - 1;

	let maxAreaOfWater = 0;

	while (leftPointer < rightPointer) {
		const heightOfleftPointer = height[leftPointer];
		const heightOfRightPointer = height[rightPointer];
		const currentWidth = rightPointer - leftPointer;
		const areaOfWater =
			Math.min(heightOfleftPointer, heightOfRightPointer) * currentWidth;

		maxAreaOfWater = Math.max(areaOfWater, maxAreaOfWater);

		if (heightOfleftPointer > heightOfRightPointer) {
			rightPointer--;
		} else {
			leftPointer++;
		}
	}

	return maxAreaOfWater;
}
