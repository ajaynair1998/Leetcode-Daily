interface ITimeStampAndValue {
	value: string;
	timestamp: number;
}
class TimeMap {
	private map: Map<string, Array<ITimeStampAndValue>>;
	constructor() {
		this.map = new Map();
	}

	set(key: string, value: string, timestamp: number): void {
		if (!this.map.has(key)) {
			this.map.set(key, [
				{
					value: value,
					timestamp: timestamp,
				},
			]);
		} else {
			const arrayOfValues = this.map.get(key);
			const index = this.binarySearch(
				arrayOfValues as Array<ITimeStampAndValue>,
				timestamp
			);

			arrayOfValues?.splice(index, 0, {
				value: value,
				timestamp: timestamp,
			});
		}
	}

	get(key: string, timestamp: number): string {
		const keyPresent = this.map.get(key);
		if (!keyPresent) {
			return "";
		} else {
			const nearestIndex = this.binarySearch(keyPresent, timestamp);
			if (nearestIndex > keyPresent.length - 1 || nearestIndex < 0) {
				return "";
			}
			const nearestValue = keyPresent[nearestIndex].value;
			return nearestValue;
		}
	}

	private binarySearch(nums: Array<ITimeStampAndValue>, target: number) {
		let leftPointer = 0;
		let rightPointer = nums.length - 1;

		while (leftPointer <= rightPointer) {
			const mid = Math.floor((leftPointer + rightPointer) / 2);

			const valueAtMid = nums[mid].timestamp;

			if (valueAtMid === target) {
				return mid;
			} else if (valueAtMid > target) {
				leftPointer = mid + 1;
			} else {
				rightPointer = mid - 1;
			}
		}

		return leftPointer;
	}
}
