interface AnagramDirectory {
	[key: string]: string[];
}

function groupAnagrams(strs: string[]): string[][] {
	const directory: AnagramDirectory = {};

	for (let pointer = 0; pointer < strs.length; pointer++) {
		const stringAtIndex = strs[pointer];

		const stringSortedByASCIIOrder = sortedByASCII(stringAtIndex);

		if (directory[stringSortedByASCIIOrder]) {
			directory[stringSortedByASCIIOrder].push(stringAtIndex);
		} else {
			directory[stringSortedByASCIIOrder] = [stringAtIndex];
		}
	}

	const stringsInDirectory: string[][] = [];
	const keysInDirectory = Object.keys(directory);

	for (const key of keysInDirectory) {
		stringsInDirectory.push(directory[key]);
	}
	return stringsInDirectory;
}

const sortedByASCII = (s: string): string => {
	const sortedAsArray = s
		.split("")
		.sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0));

	return sortedAsArray.join("");
};
