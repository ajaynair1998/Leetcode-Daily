class LongestConsecutiveSequenceHelper {
	private directory: Set<number>;

	constructor() {
		this.directory = new Set();
	}

	public checkIfValueIsTheStartOfSequence(value: number): boolean {
		if (this.directory.has(value - 1)) {
			return false;
		} else {
			return true;
		}
	}

	public addValueToDirectory(value: number): void {
		this.directory.add(value);
	}

	public checkIfValueExists(value: number): boolean {
		if (this.directory.has(value)) {
			return true;
		} else {
			return false;
		}
	}
}

function longestConsecutive(nums: number[]): number {
	if (!nums.length) return 0;

	let longestStreak = 1;
	const helper = new LongestConsecutiveSequenceHelper();

	for (let pointer = 0; pointer < nums.length; pointer++) {
		helper.addValueToDirectory(nums[pointer]);
	}

	for (let pointer = 0; pointer < nums.length; pointer++) {
		const currentValue = nums[pointer];
		let currentStreak = 1;

		const isStartOfSequence =
			helper.checkIfValueIsTheStartOfSequence(currentValue);

		if (!isStartOfSequence) {
			// do nothing
		} else if (isStartOfSequence) {
			let checkNextValue = true;
			let nextValue = currentValue + 1;
			while (checkNextValue) {
				const nextValueExists = helper.checkIfValueExists(nextValue);

				if (nextValueExists) {
					currentStreak++;
					nextValue++;
				} else if (!nextValueExists) {
					longestStreak = Math.max(longestStreak, currentStreak);
					checkNextValue = false;
				}
			}
		}
	}

	return longestStreak;
}
