"use strict";
function missingNumber(nums) {
    let newNumsArray = new Array(nums.length);
    let missingNumbersInArray = [];
    for (let num of nums) {
        newNumsArray[num] = 1;
    }
    for (let i = 0; i < newNumsArray.length; i++) {
        if (!newNumsArray[i]) {
            missingNumbersInArray.push(i + 1);
        }
    }
    return missingNumbersInArray;
}
let debug = missingNumber([4, 3, 2, 7, 8, 2, 3, 1]);
console.log("🚀 ~ file: findDissappearedNumbers.ts ~ line 16 ~ debug", debug);
