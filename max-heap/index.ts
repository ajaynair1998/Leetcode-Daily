class Maxheap {
	constructor(array: number[]) {
		this.heap = array;
	}
	public heap: number[] = [1, 2, 3, 4, 5, 6];

	public swap(i: number, j: number) {
		if (i < 0 || j < 0 || i >= this.heap.length || j >= this.heap.length) {
			throw Error(`Invalid swap indexes ${i} ${j}`);
		}

		const temp = this.heap[i];
		this.heap[i] = this.heap[j];
		this.heap[j] = temp;
	}

	// INFO : This function goes from top to Bottom ie keep in mind this is
	// for a single node comparison with its left and right node and swap( and will go down through the swapped node if swapped)
	// so if you want to actually sort all levels you should run this from Math.floor(heap.length) - 1 to 0
	public maxHeapify(i: number): void {
		const leftNodeIndex = 2 * i + 1;
		const rightNodeIndex = 2 * i + 2;

		// INFO : From the current node we have to swap if it's not the largest
		const valueAtIndex = this.heap[i];
		let largest = i;

		if (!MaxheapHelpers.leftNodeExists(this.heap, i)) {
			// do nothing
		} else if (valueAtIndex >= this.heap[leftNodeIndex]) {
			// do nothing
		} else {
			largest = leftNodeIndex;
		}

		if (!MaxheapHelpers.rightNodeExists(this.heap, i)) {
			// do nothing
			// Below condition can be missed if not careful
			// If we already found out left was bigger we have compare with left not with the initial node
		} else if (this.heap[largest] >= this.heap[rightNodeIndex]) {
			// do nothing
		} else {
			largest = rightNodeIndex;
		}

		if (largest != i) {
			this.swap(i, largest);
			this.maxHeapify(largest);
		}
	}

	public buildMaxHeap() {
		const lastInternalNode = Math.floor(this.heap.length / 2);

		for (let i = lastInternalNode; i >= 0; i--) {
			this.maxHeapify(i);
		}
	}

	public peek() {
		console.log(this.heap);
	}
}

class MaxheapHelpers {
	public static leftNodeExists(heap: number[], i: number): boolean {
		const leftNodeIndex = 2 * i + 1;
		const valueAtleftNode = heap[leftNodeIndex];

		if (leftNodeIndex >= heap.length) {
			return false;
		}

		if (valueAtleftNode == undefined) {
			return false;
		}

		return true;
	}

	public static rightNodeExists(heap: number[], i: number): boolean {
		const rightNodeIndex = 2 * i + 2;
		const rightNodeValue = heap[rightNodeIndex];

		if (rightNodeIndex >= heap.length) {
			return false;
		}

		if (rightNodeValue == undefined) {
			return false;
		}

		return true;
	}
}
const maxHeap = new Maxheap([1, 2, 3, 4, 5, 6, 7, 8, 9]);
maxHeap.buildMaxHeap();
maxHeap.peek();
