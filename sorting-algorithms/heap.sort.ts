class HeapSortHelper {
	public swap(arr: Array<number>, i: number, j: number): void {
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	public minHeapify(arr: Array<number>, index: number, limit: number) {
		if (index > limit) {
			return;
		}

		const leftNode = 2 * index + 1;
		const rightNode = 2 * index + 2;

		let smallest = index;

		if (leftNode <= limit && arr[leftNode] < arr[smallest]) {
			smallest = leftNode;
		}

		if (rightNode <= limit && arr[rightNode] < arr[smallest]) {
			smallest = rightNode;
		}

		if (smallest != index) {
			this.swap(arr, index, smallest);
			this.minHeapify(arr, smallest, limit);
		}
	}

	public buildMinHeap(arr: Array<number>, limit: number): Array<number> {
		const initialPointerLocation = Math.floor(limit / 2);

		for (let i = initialPointerLocation; i >= 0; i--) {
			this.minHeapify(arr, i, limit);
		}

		return arr;
	}

	public sortInDescendingOrder(arr: Array<number>) {
		const initialLimit = arr.length - 1;

		for (let i = initialLimit; i >= 1; i--) {
			this.buildMinHeap(arr, i);
			this.swap(arr, i, 0);
		}

		return arr;
	}
}

function doHeapSortAscending() {
	const testArray = [8, 2, 3, 4, 5, 7, 1];
	const helper = new HeapSortHelper();

	const sortInDescendingOrder = helper.sortInDescendingOrder(testArray);
}

doHeapSortAscending();
