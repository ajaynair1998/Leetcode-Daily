interface IHashMap {
	[key: number]: number;
}
function findDuplicate(nums: number[]): number {
	let map: IHashMap = {};
	for (let num of nums) {
		if (map[num] !== undefined) {
			return num;
		} else {
			map[num] = 1;
		}
	}
	return 1;
}
