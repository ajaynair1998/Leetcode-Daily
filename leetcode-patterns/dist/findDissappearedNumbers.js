"use strict";
function missingNumber(nums) {
    let newNumsArray = new Array(nums.length);
    let missingNumbersInArray = [];
    for (let num of nums) {
        newNumsArray[num - 1] = 1;
    }
    for (let i = 0; i < newNumsArray.length; i++) {
        if (!newNumsArray[i]) {
            missingNumbersInArray.push(i + 1);
        }
    }
    return missingNumbersInArray;
}
