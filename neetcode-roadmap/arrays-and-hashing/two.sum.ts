interface IDirectory {
	[key: string | number]: number;
}
function twoSum(nums: number[], target: number): number[] {
	const directory: IDirectory = {};
	for (let pointer = 0; pointer < nums.length; pointer++) {
		const valueAtIndex = nums[pointer];
		const remainingValueNeeded = target - valueAtIndex;

		if (directory[remainingValueNeeded] != undefined) {
			return [directory[remainingValueNeeded], pointer];
		} else {
			directory[valueAtIndex] = pointer;
		}
	}
	return [];
}
