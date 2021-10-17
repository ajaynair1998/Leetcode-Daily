function hasSingleCycle(array) {
  let counter = array.length;
  let currentIndex = 0;
  while (counter) {
    if (counter < array.length && currentIndex == 0) return false;
    counter--;
    currentIndex = getNextIndex(array, currentIndex);
  }
  return currentIndex == 0;
}

function getNextIndex(array, currentIndex) {
  let jumpTimes = array[currentIndex];
  let lengthOfArray = array.length;
  let nextPosition = (currentIndex + jumpTimes) % lengthOfArray;

  return nextPosition >= 0 ? nextPosition : nextPosition + lengthOfArray;
}
