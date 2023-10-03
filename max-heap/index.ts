//www.programiz.com/dsa/heap-sort
class Maxheap {
	constructor(array: number[]) {
		this.heap = array;
	}
	public heap: number[] = [1, 5, 8, 7];

	public swap(i: number, j: number) {
		if (i < 0 || j < 0 || i >= this.heap.length || j >= this.heap.length) {
			console.log(`Invalid swap indexes ${i} ${j}`);
			throw new Error(`Invalid swap indexes ${i} ${j}`);
		}

		const temp = this.heap[i];
		this.heap[i] = this.heap[j];
		this.heap[j] = temp;
	}

	// INFO : This function goes from top to Bottom ie keep in mind this is
	// for a single node comparison with its left and right node and swap( and will go down through the swapped node if swapped)
	// so if you want to actually get the max value from all nodes(still not sort just gets the max value to the top)
	// you should run this from Math.floor(heap.length) - 1 to 0

	// to actually sort we need another function to append top Node to the end
	// then get the max from the remaining elements then again append to end
	//  In each consectutive Heapification dont include the last element
	public maxHeapify(i: number, lastElement: number): void {
		const leftNodeIndex = 2 * i + 1;
		const rightNodeIndex = 2 * i + 2;

		// INFO : From the current node we have to swap if it's not the largest
		const valueAtIndex = this.heap[i];
		let largest = i;

		if (
			i > lastElement ||
			leftNodeIndex > lastElement ||
			!MaxheapHelpers.leftNodeExists(this.heap, i)
		) {
			// do nothing
		} else if (valueAtIndex >= this.heap[leftNodeIndex]) {
			// do nothing
		} else {
			largest = leftNodeIndex;
		}

		if (
			i > lastElement ||
			rightNodeIndex > lastElement ||
			!MaxheapHelpers.rightNodeExists(this.heap, i)
		) {
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
			this.maxHeapify(largest, lastElement);
		}
	}

	// INFO : This only brings the top element to the root , DOES NOT SORT
	public buildMaxHeap() {
		const lastInternalNode = Math.floor(this.heap.length / 2);

		for (let i = lastInternalNode; i >= 0; i--) {
			this.maxHeapify(i, this.heap.length - 1);
		}
	}

	public heapSort() {
		// INFO : first build max heap
		this.buildMaxHeap();
		const sizeOfHeap = this.heap.length;

		for (let lastElement = sizeOfHeap - 1; lastElement >= 0; lastElement--) {
			this.swap(lastElement, 0);
			this.maxHeapify(0, lastElement - 1);
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
const maxHeap = new Maxheap([9, 8, 7, 2, 3]);
maxHeap.heapSort();
maxHeap.peek();
