class SerchInSortedArrayHelper {
	public findPivotIndex(nums: Array<number>): number {
		let leftPointer = 0;
		let rightPointer = nums.length - 1;
		let currentMinimum = nums[0];
		let currentMinimumIndex = 0;

		while (leftPointer <= rightPointer) {
			const valueAtleft = nums[leftPointer];
			const valueAtRight = nums[rightPointer];

			if (valueAtleft <= valueAtRight) {
				currentMinimum = Math.min(currentMinimum, valueAtleft);
				if (valueAtleft === currentMinimum) {
					currentMinimumIndex = leftPointer;
				}
			}

			const mid = Math.floor((leftPointer + rightPointer) / 2);
			const valueAtMid = nums[mid];

			if (valueAtleft <= valueAtMid) {
				currentMinimum = Math.min(currentMinimum, valueAtleft);
				if (valueAtleft === currentMinimum) {
					currentMinimumIndex = leftPointer;
				}
				leftPointer = mid + 1;
			} else {
				currentMinimum = Math.min(currentMinimum, valueAtMid);
				if (valueAtMid === currentMinimum) {
					currentMinimumIndex = mid;
				}
				rightPointer = mid - 1;
			}
		}

		return currentMinimumIndex;
	}

	public binarySearch(
		start: number,
		end: number,
		nums: Array<number>,
		target: number
	): number {
		let leftPointer = start;
		let rightPointer = end;

		while (leftPointer <= rightPointer) {
			const mid = Math.floor((leftPointer + rightPointer) / 2);
			const valueAtMid = nums[mid];

			if (valueAtMid === target) {
				return mid;
			}

			if (valueAtMid < target) {
				leftPointer = mid + 1;
			} else {
				rightPointer = mid - 1;
			}
		}

		return -1;
	}
}
function search(nums: number[], target: number) {
	const helper = new SerchInSortedArrayHelper();

	const pivot = helper.findPivotIndex(nums);
	const valueAtPivot = nums[pivot];

	if (target >= valueAtPivot && target <= nums[nums.length - 1]) {
		const binarySearch = helper.binarySearch(
			pivot,
			nums.length - 1,
			nums,
			target
		);
		return binarySearch;
	} else {
		const binarySearch = helper.binarySearch(0, pivot, nums, target);
		return binarySearch;
	}
}

const answer = search([3, 4, 5, 6, 1, 2], 2);
