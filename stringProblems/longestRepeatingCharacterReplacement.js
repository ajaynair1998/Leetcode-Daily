function characterReplacement(s, k) {
  let charCodeOfA = "A".charCodeAt(); //same as charcode(0)
  let arrayOfEachCode = new Array(26).fill(0);
  let leftPointer = 0;
  let max = 0;
  let currentHighestOccuringCharacter = 0;
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    let leftCharacter = s[leftPointer];
    let rightCharacter = s[rightPointer];
    let charCodeOfLeftCharacterRelative =
      leftCharacter.charCodeAt() - charCodeOfA;
    let charCodeOfRightCharacterRelative =
      rightCharacter.charCodeAt() - charCodeOfA;

    arrayOfEachCode[charCodeOfRightCharacterRelative] =
      arrayOfEachCode[charCodeOfRightCharacterRelative] + 1 || 1;
    currentHighestOccuringCharacter = Math.max(...arrayOfEachCode);

    while (
      rightPointer - leftPointer + 1 - currentHighestOccuringCharacter >
      k
    ) {
      leftCharacter = s[leftPointer];
      charCodeOfLeftCharacterRelative =
        leftCharacter.charCodeAt() - charCodeOfA;
      arrayOfEachCode[charCodeOfLeftCharacterRelative] =
        arrayOfEachCode[charCodeOfLeftCharacterRelative] - 1;

      leftPointer++;
      currentHighestOccuringCharacter = Math.max(...arrayOfEachCode);
    }
    max = Math.max(max, rightPointer - leftPointer + 1);
  }
  return max;
}

console.log(
  characterReplacement(
    "KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF",
    4
  )
);
