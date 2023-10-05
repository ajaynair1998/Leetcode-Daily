class MergeSortHelper {
	public getLeftArray(
		arr: Array<number>,
		left: number,
		right: number
	): Array<number> {
		const start = left;
		const end = Math.floor(left + right / 2);

		return arr.slice(start, end + 1);
	}

	public getRightArray(
		arr: Array<number>,
		left: number,
		right: number
	): Array<number> {
		const start = Math.floor(left + right / 2) + 1;
		const end = Math.floor(right);

		return arr.slice(start, end + 1);
	}

	public mergeSort(arr: Array<number>, left: number, right: number) {
		if (left >= right) {
			return [arr[left]];
		}

		const leftArray = this.getLeftArray(arr, left, right);
		const rightArray = this.getRightArray(arr, left, right);

		const sortedLeftArray: Array<number> = this.mergeSort(
			leftArray,
			0,
			leftArray.length - 1
		);
		const sortedRightArray: Array<number> = this.mergeSort(
			rightArray,
			0,
			rightArray.length - 1
		);

		return this.merge(sortedLeftArray, sortedRightArray);
	}

	public merge(
		firstArray: Array<number>,
		secondArray: Array<number>
	): Array<number> {
		if (
			!firstArray ||
			!secondArray ||
			!firstArray.length ||
			!secondArray.length
		) {
			console.log(firstArray, secondArray);
			throw new Error(`Error while merging`);
		}

		const mergedArray = [];

		let pointerForFirstArray = 0;
		let pointerForSecondArray = 0;

		while (
			pointerForFirstArray < firstArray.length &&
			pointerForSecondArray < secondArray.length
		) {
			const valueFromFirstPointer = firstArray[pointerForFirstArray];
			const valueFromSecondPointer = secondArray[pointerForSecondArray];

			if (valueFromFirstPointer <= valueFromSecondPointer) {
				mergedArray.push(valueFromFirstPointer);
				pointerForFirstArray++;
			} else {
				mergedArray.push(valueFromSecondPointer);
				pointerForSecondArray++;
			}
		}

		while (pointerForFirstArray < firstArray.length) {
			const valueFromFirstPointer = firstArray[pointerForFirstArray];
			mergedArray.push(valueFromFirstPointer);
			pointerForFirstArray++;
		}

		while (pointerForSecondArray < secondArray.length) {
			const valueFromSecondPointer = secondArray[pointerForSecondArray];
			mergedArray.push(valueFromSecondPointer);
			pointerForSecondArray++;
		}

		return mergedArray;
	}
}

function doMergeSort() {
	const helper = new MergeSortHelper();
	const testArray = [10, 9, 23, 456, 75, 2];
	const merged = helper.mergeSort(testArray, 0, testArray.length - 1);
}

doMergeSort();
