class BinarySearchHelper {
	public searchIfRowExists(arr: Array<Array<number>>, target: number): number {
		let leftPointer = 0;
		let rightPointer = arr.length - 1;

		while (leftPointer <= rightPointer) {
			const mid = Math.floor((leftPointer + rightPointer) / 2);

			const startValueAtMid = arr[mid][0];
			const endValueAtMid = arr[mid][arr[mid].length - 1];

			if (target >= startValueAtMid && target <= endValueAtMid) {
				return mid;
			} else if (target < startValueAtMid) {
				rightPointer = mid - 1;
			} else if (target > endValueAtMid) {
				leftPointer = mid + 1;
			}
		}

		return -1;
	}

	public binarySearch(arr: Array<number>, target: number): number {
		let leftPointer = 0;
		let rightPointer = arr.length - 1;

		while (leftPointer <= rightPointer) {
			const mid = Math.floor((leftPointer + rightPointer) / 2);
			const valueAtMid = arr[mid];

			if (target === valueAtMid) {
				return mid;
			} else if (target < valueAtMid) {
				rightPointer = mid - 1;
			} else if (target > valueAtMid) {
				leftPointer = mid + 1;
			}
		}

		return -1;
	}
}

function searchMatrix(matrix: number[][], target: number): boolean {
	const helper = new BinarySearchHelper();
	const rowExists = helper.searchIfRowExists(matrix, target);

	if (rowExists === -1) {
		return false;
	}

	const valueExists = helper.binarySearch(matrix[rowExists], target);

	if (valueExists === -1) {
		return false;
	}

	return true;
}

const exists = searchMatrix(
	[
		[1, 3, 5, 7],
		[10, 11, 16, 20],
		[23, 30, 34, 60],
	],
	2
);
