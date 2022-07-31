interface IMap {
	[key: number]: number;
}

function containsDuplicate(nums: number[]): boolean {
	let hashMap: IMap = {};
	for (let num of nums) {
		if (hashMap[num] === undefined) {
			hashMap[num] = 1;
		} else {
			return true;
		}
	}
	return false;
}

let data = containsDuplicate([1, 2, 3, 1]);
console.log(data);
