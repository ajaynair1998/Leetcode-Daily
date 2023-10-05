class MergeSorthelper {
	public getLeftArray(arr: Array<number>) {
		const start = 0;
		const end = Math.floor(arr.length / 2);

		return arr.slice(start, end);
	}

	public getRightArray(arr: Array<number>) {
		const start = Math.floor(arr.length / 2);
		const end = arr.length;

		return arr.slice(start, end);
	}

	public mergeSort(
		arr: Array<number>,
		start: number,
		end: number
	): Array<number> {
		if (start >= end) {
			return [arr[start]];
		}

		const leftArray = this.getLeftArray(arr);
		const rightArr = this.getRightArray(arr);

		const mergeSortLeftArray = this.mergeSort(
			leftArray,
			0,
			leftArray.length - 1
		);

		const mergeSortRightArray = this.mergeSort(
			rightArr,
			0,
			rightArr.length - 1
		);

		const merged = this.merge(mergeSortLeftArray, mergeSortRightArray);

		return merged;
	}

	public merge(leftArr: Array<number>, rightArr: Array<number>): Array<number> {
		let pointerOnLeftArray = 0;
		let pointerOnRightArray = 0;

		const mergedArray = [];

		while (
			pointerOnLeftArray < leftArr.length &&
			pointerOnRightArray < rightArr.length
		) {
			const valueInLeftArr = leftArr[pointerOnLeftArray];
			const valueInRightArr = rightArr[pointerOnRightArray];

			if (valueInLeftArr <= valueInRightArr) {
				mergedArray.push(valueInLeftArr);
				pointerOnLeftArray++;
			} else {
				mergedArray.push(valueInRightArr);
				pointerOnRightArray++;
			}
		}

		while (pointerOnLeftArray < leftArr.length) {
			const valueInLeftArr = leftArr[pointerOnLeftArray];
			mergedArray.push(valueInLeftArr);
			pointerOnLeftArray++;
		}

		while (pointerOnRightArray < rightArr.length) {
			const valueInRightArr = rightArr[pointerOnRightArray];
			mergedArray.push(valueInRightArr);
			pointerOnRightArray++;
		}

		return mergedArray;
	}
}

function threeSum(nums: number[]): number[][] {
	const helper = new MergeSorthelper();

	let firstPointer = 0;
	const finalSolution = [];

	const sortedArray = helper.mergeSort(nums, 0, nums.length - 1);

	while (firstPointer <= sortedArray.length - 3) {
		while (
			firstPointer > 0 &&
			sortedArray[firstPointer - 1] == sortedArray[firstPointer]
		) {
			firstPointer++;
		}
		const target = sortedArray[firstPointer];

		let secondPointer = firstPointer + 1;
		let thirdPointer = sortedArray.length - 1;

		while (secondPointer < thirdPointer) {
			const valueAtSecondPointer = sortedArray[secondPointer];
			const valueAtThirdPointer = sortedArray[thirdPointer];
			const total = valueAtSecondPointer + valueAtThirdPointer;
			const threeSum = total + target;

			if (threeSum === 0) {
				finalSolution.push([
					sortedArray[firstPointer],
					sortedArray[secondPointer],
					sortedArray[thirdPointer],
				]);
				secondPointer++;

				while (
					sortedArray[secondPointer] == sortedArray[secondPointer - 1] &&
					secondPointer < thirdPointer
				) {
					secondPointer++;
				}
			} else if (threeSum > 0) {
				thirdPointer--;
			} else if (threeSum < 0) {
				secondPointer++;
			}
		}

		firstPointer++;
	}

	return finalSolution;
}

const solution = threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
console.log("🚀 ~ file: three.sum.ts:135 ~ solution:", solution);
