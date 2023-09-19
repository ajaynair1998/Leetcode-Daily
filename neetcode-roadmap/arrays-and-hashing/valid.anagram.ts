function isAnagram(s: string, t: string): boolean {
	// INFO : has map is better
	const sortedS = s
		.split("")
		.sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0));
	const sortedT = t
		.split("")
		.sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0));

	const sortedSAsString = sortedS.join("");

	const sortedTAsString = sortedT.join("");

	if (s.length != t.length || sortedSAsString !== sortedTAsString) {
		return false;
	} else {
		return true;
	}
}
