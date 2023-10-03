function twoSum(numbers: number[], target: number): number[] {
	let startPointer = 0;
	let endPointer = numbers.length - 1;

	while (startPointer < endPointer) {
		const currentSum = numbers[startPointer] + numbers[endPointer];

		if (currentSum === target) {
			return [startPointer + 1, endPointer + 1];
		} else if (currentSum < target) {
			startPointer++;
		} else if (currentSum > target) {
			endPointer--;
		}
	}

	return [];
}
