function lengthOfTheLongestSubstring(s) {
  if (s === "") return 0
  let setOfCharacters = new Set()
  let leftPointer = 0

  let currentMaximum = -1

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    let characterAtRight = s[rightPointer]
    currentMaximum = Math.max(rightPointer - leftPointer + 1, currentMaximum)

    while (setOfCharacters.has(characterAtRight)) {
      let characterAtLeft = s[leftPointer]
      setOfCharacters.delete(characterAtLeft)
      leftPointer++
    }

    setOfCharacters.add(characterAtRight)
  }
  return currentMaximum
}

console.log(lengthOfTheLongestSubstring("tmmzuxt"))
