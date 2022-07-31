function productExceptSelf(nums: number[]): number[] {
	let productFromRight = [1];
	let productFromLeft = [1];
	let finalArray = [];

	for (let i = 1; i < nums.length; i++) {
		let start = i;
		let end = nums.length - i;

		// left product
		let currentProductFromLeft = nums[start - 1] * productFromLeft[i - 1];
		productFromLeft.push(currentProductFromLeft);

		// right product
		let currentProductFromRight = nums[end] * productFromRight[0];
		productFromRight.unshift(currentProductFromRight);
	}

	for (let i = 0; i < nums.length; i++) {
		finalArray[i] = productFromLeft[i] * productFromRight[i];
	}
	return finalArray;
}

productExceptSelf([1, 2, 3, 4]);
