class Helper {
	public checkNumberOfTurnesNeeded(
		bananas: number[],
		speed: number,
		limit: number
	): number {
		let times = 0;
		let pointer = 0;

		while (pointer < bananas.length) {
			const numberOfBananasAtPosition = bananas[pointer];
			const timesNeededToEatBananas = Math.ceil(
				numberOfBananasAtPosition / speed
			);

			times = times + timesNeededToEatBananas;
			if (times > limit) {
				return times;
			}
			pointer++;
		}

		return times;
	}

	public findMaxBananaPile(bananas: Array<number>): number {
		let max = 0;

		for (let pointer = 0; pointer < bananas.length; pointer++) {
			const currentValue = bananas[pointer];

			if (currentValue > max) {
				max = currentValue;
			}
		}

		return max;
	}
}
function minEatingSpeed(piles: number[], h: number) {
	const helper = new Helper();

	const possibleMaxValue = helper.findMaxBananaPile(piles);
	let leftPointer = 1;
	let rightPointer = possibleMaxValue;
	let minimum = rightPointer;

	while (leftPointer <= rightPointer) {
		const currentValue = Math.floor((leftPointer + rightPointer) / 2);

		const timesNeededToEat = helper.checkNumberOfTurnesNeeded(
			piles,
			currentValue,
			h
		);

		if (timesNeededToEat <= h) {
			Math.min(currentValue, minimum);
		} else if (timesNeededToEat > h) {
			leftPointer = currentValue + 1;
		} else if (timesNeededToEat < h) {
			rightPointer = currentValue - 1;
		}
	}

	return minimum;
}

const minEatingSpeedTest = minEatingSpeed([3, 6, 7, 11], 8);
