type Directory = {
	[key: string]: boolean;
};

function containsDuplicate(nums: number[]): boolean {
	const directory: Directory = {};

	for (let pointer = 0; pointer < nums.length; pointer++) {
		const valueInIndex = nums[pointer];
		if (directory[valueInIndex]) {
			return true;
		} else {
			directory[valueInIndex] = true;
			continue;
		}
	}

	return false;
}

const exampleNumbers = [1, 2, 3, 1];
