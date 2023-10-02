class PriorityQueueDataStructure {
	heap: FrequencyNode[] = [];

	public swap(i: number, j: number) {
		const temp = this.heap[i];
		this.heap[i] = this.heap[j];
		this.heap[j] = temp;
	}

	public insert(value: FrequencyNode) {
		this.heap.push(value);
		this.buildMaxHeap();
	}

	public peek() {
		console.log(this.heap);
	}

	public buildMaxHeap() {
		const lastInternalNode = Math.floor(this.heap.length / 2);

		for (let i = lastInternalNode; i >= 0; i--) {
			this.maxHeapify(i, this.heap.length - 1);
		}
	}

	public maxHeapify(i: number, lastElement: number) {
		let largest = i;
		const leftNodeIndex = 2 * i + 1;
		const rightNodeIndex = 2 * i + 2;

		if (
			leftNodeIndex <= lastElement &&
			this.heap[leftNodeIndex].frequency > this.heap[largest].frequency
		) {
			largest = leftNodeIndex;
		}

		if (
			rightNodeIndex <= lastElement &&
			this.heap[rightNodeIndex].frequency > this.heap[largest].frequency
		) {
			largest = rightNodeIndex;
		}

		if (largest != i) {
			this.swap(i, largest);
			this.maxHeapify(largest, lastElement);
		}
	}
}

class FrequencyNode {
	public frequency = 1;
	constructor(public value: number) {
		this.value = value;
	}

	public incrementFrequency() {
		this.frequency++;
	}
}

function topKFrequent(nums: number[], k: number): number[] {
	const frequencyMap: Map<number, FrequencyNode> = new Map();
	const priorityQueue = new PriorityQueueDataStructure();

	for (let i = 0; i < nums.length; i++) {
		const value = nums[i];
		const frequencyNode = frequencyMap.get(value);

		if (frequencyNode) {
			frequencyNode.incrementFrequency();
		} else {
			frequencyMap.set(value, new FrequencyNode(value));
		}
	}

	frequencyMap.forEach((frequencyNode) => {
		priorityQueue.insert(frequencyNode);
	});

	const result: number[] = [];

	for (let i = 0; i < k; i++) {
		const topElement = priorityQueue.heap[0];
		result.push(topElement.value);
		priorityQueue.heap.shift();
		priorityQueue.buildMaxHeap();
	}

	return result;
}
