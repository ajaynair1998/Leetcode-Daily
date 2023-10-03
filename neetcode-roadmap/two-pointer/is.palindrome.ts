class PalindromeHelper {
	public lowerCaseStart = "a".charCodeAt(0); // 97
	public lowerCaseEnd = "z".charCodeAt(0); // 122

	public numericStart = "0".charCodeAt(0); // 48
	public numericEnd = "9".charCodeAt(0); // 57

	public upperCaseStart = "A".charCodeAt(0); //65
	public upperCaseEnd = "Z".charCodeAt(0); //90

	public checkIfInAllowedRange(value: string): boolean {
		const charCode = value.charCodeAt(0);
		if (charCode >= this.numericStart && charCode <= this.numericEnd)
			return true;
		if (charCode >= this.lowerCaseStart && charCode <= this.lowerCaseEnd)
			return true;
		if (charCode >= this.upperCaseStart && charCode <= this.upperCaseEnd)
			return true;

		return false;
	}

	public checkIfUpperCase(value: string): boolean {
		const charCode = value.charCodeAt(0);

		if (charCode >= this.upperCaseStart && charCode <= this.upperCaseEnd)
			return true;

		return false;
	}
}

function isPalindrome(s: string): boolean {
	const helper = new PalindromeHelper();

	const stringInArrayForm = s.split("");
	const stringWithOnlyValidCharacters: string[] = [];

	for (let i = 0; i < stringInArrayForm.length; i++) {
		const currentCharacter = stringInArrayForm[i];

		const isInAllowedRange = helper.checkIfInAllowedRange(currentCharacter);

		if (!isInAllowedRange) {
			continue;
		} else if (isInAllowedRange) {
			const isUpperCaseCharacter = helper.checkIfUpperCase(currentCharacter);

			if (isUpperCaseCharacter) {
				stringWithOnlyValidCharacters.push(currentCharacter.toLowerCase());
			} else if (!isUpperCaseCharacter) {
				stringWithOnlyValidCharacters.push(currentCharacter);
			}
		}
	}

	let startPointer = 0;
	let endPointer = stringWithOnlyValidCharacters.length - 1;

	while (startPointer < endPointer) {
		const characterAtStartPointer = stringWithOnlyValidCharacters[startPointer];
		const characterAtEndPointer = stringWithOnlyValidCharacters[endPointer];

		if (characterAtEndPointer != characterAtStartPointer) {
			return false;
		}
		startPointer++;
		endPointer--;
	}

	return true;
}
