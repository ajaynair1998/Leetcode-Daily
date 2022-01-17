function groupAnagrams(strs) {
  // set of all anagrams
  let setOfAnagrams = {};
  // temp list to store the sorted strings in the same order as input strings
  let tempList = [];

  // iterate through all strings and sort them so we get the base anagram
  for (let word of strs) {
    let sortedWord = Array.from(word).sort().join("");

    if (!setOfAnagrams[sortedWord]) {
      setOfAnagrams[sortedWord] = [];
    }
    tempList.push(sortedWord);
  }

  // Now iterate through the input list and group the anagrams according
  // to the templist

  for (let pointer = 0; pointer < strs.length; pointer++) {
    let currentAnagram = tempList[pointer];
    let currentUnorderedInput = strs[pointer];

    setOfAnagrams[currentAnagram].push(currentUnorderedInput);
  }

  // final array with all anagrams together
  let finalOutput = [];

  for (let [key, value] of Object.entries(setOfAnagrams)) {
    finalOutput.push(value);
  }
  return finalOutput;
}
