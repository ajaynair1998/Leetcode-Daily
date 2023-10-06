function trap(height: number[]): number {
	let leftPointer = 0;
	let rightPointer = height.length - 1;

	let maxLeft = 0;
	let maxRight = 0;

	// INFO : for debugging
	const waterVolumeArray = new Array(height.length).fill(0);
	let totalVolume = 0;

	while (leftPointer <= rightPointer) {
		if (maxLeft <= maxRight) {
			// INFO : left is the bottleneck for overflowing
			const index = leftPointer;
			const volumeOfWaterInTheCurrentIndex = maxLeft - height[index];
			if (volumeOfWaterInTheCurrentIndex < 0) {
				waterVolumeArray[index] = 0;
			} else {
				waterVolumeArray[index] = volumeOfWaterInTheCurrentIndex;
				totalVolume = totalVolume + volumeOfWaterInTheCurrentIndex;
			}
			maxLeft = Math.max(maxLeft, height[index]);
			leftPointer++;
		} else if (maxRight < maxLeft) {
			// INFO : here right is the bottleneck causing overflow
			const index = rightPointer;
			const volumeInCurrentIndex = maxRight - height[index];
			if (volumeInCurrentIndex < 0) {
				waterVolumeArray[index] = 0;
			} else {
				waterVolumeArray[index] = volumeInCurrentIndex;
				totalVolume = totalVolume + volumeInCurrentIndex;
			}
			maxRight = Math.max(maxRight, height[index]);
			rightPointer--;
		}
	}

	return totalVolume;
}
