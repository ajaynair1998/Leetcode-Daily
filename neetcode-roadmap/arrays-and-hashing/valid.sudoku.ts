class SudokuHelper {
	private rowSet: Map<number, Set<string>>;
	private colSet: Map<number, Set<string>>;
	private boxSet: Map<number, Set<string>>;

	constructor() {
		this.rowSet = new Map();
		this.colSet = new Map();
		this.boxSet = new Map();
	}

	public getBoxNumber(row: number, col: number): number {
		const boxRow = Math.floor(row / 3);
		const boxCol = Math.floor(col / 3);

		return boxRow * 3 + boxCol;
	}

	public checkIfValid(row: number, col: number, value: string): boolean {
		const boxNumber = this.getBoxNumber(row, col);
		const rowSet = this.rowSet.get(row);
		const colSet = this.colSet.get(col);
		const boxSet = this.boxSet.get(boxNumber);

		if (rowSet?.has(value) || colSet?.has(value) || boxSet?.has(value)) {
			return false;
		}

		return true;
	}

	public addValue(row: number, col: number, value: string) {
		const boxNumber = this.getBoxNumber(row, col);
		const rowSet = this.rowSet.get(row);
		const colSet = this.colSet.get(col);

		if (rowSet) {
			rowSet.add(value);
		} else {
			this.rowSet.set(row, new Set([value]));
		}

		if (colSet) {
			colSet.add(value);
		} else {
			this.colSet.set(col, new Set([value]));
		}

		const boxSet = this.boxSet.get(boxNumber);

		if (boxSet) {
			boxSet.add(value);
		} else {
			this.boxSet.set(boxNumber, new Set([value]));
		}
	}
}

function isValidSudoku(board: string[][]): boolean {
	const sudokuHelper = new SudokuHelper();
	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			const value = board[row][col];
			if (value !== ".") {
				if (!sudokuHelper.checkIfValid(row, col, value)) {
					return false;
				}
				sudokuHelper.addValue(row, col, value);
			}
		}
	}

	return true;
}
