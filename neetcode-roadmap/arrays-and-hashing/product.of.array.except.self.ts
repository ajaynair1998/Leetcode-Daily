class ArrayConstructor {
	private leftProductArr: number[];
	private rightProductArr: number[];

	constructor(public arr: number[]) {
		if (arr.length == 0) {
			throw new Error("Array cannot be empty");
		}

		this.arr = arr;
		this.leftProductArr = Array<number>(arr.length).fill(1);
		this.rightProductArr = Array<number>(arr.length).fill(1);
	}

	public constructLeftProductArr() {
		for (let pointer = 1; pointer < this.arr.length; pointer++) {
			this.leftProductArr[pointer] =
				this.leftProductArr[pointer - 1] * this.arr[pointer - 1];
		}
	}

	public constructRightProductArr() {
		for (let pointer = this.arr.length - 2; pointer >= 0; pointer--) {
			this.rightProductArr[pointer] =
				this.rightProductArr[pointer + 1] * this.arr[pointer + 1];
		}
	}

	public constructProductArr() {
		const productArr = Array(this.arr.length).fill(1);

		for (let pointer = 0; pointer < this.arr.length; pointer++) {
			productArr[pointer] =
				this.leftProductArr[pointer] * this.rightProductArr[pointer];
		}

		return productArr;
	}
}

function productExceptSelf(nums: number[]): number[] {
	const arrayConstructor = new ArrayConstructor(nums);
	arrayConstructor.constructLeftProductArr();
	arrayConstructor.constructRightProductArr();
	const productArr = arrayConstructor.constructProductArr();

	return productArr;
}
