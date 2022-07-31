"use strict";
function productExceptSelf(nums) {
    let productFromRight = [1];
    let productFromLeft = [1];
    let finalArray = [];
    for (let i = 1; i < nums.length; i++) {
        let start = i;
        let end = nums.length - i - 1;
        // left product
        let currentProductFromLeft = nums[start] * productFromLeft[i - 1];
        productFromLeft.push(currentProductFromLeft);
        // right product
        let currentProductFromRight = nums[end] * productFromRight[end - 1];
        productFromRight.unshift(currentProductFromRight);
    }
    for (let i = 0; i < nums.length; i++) {
        finalArray[i] = productFromLeft[i] * productFromRight[i];
    }
    console.log("🚀 ~ file: productExceptSelf.ts ~ line 25 ~ productExceptSelf ~ finalArray", finalArray);
    return finalArray;
}
productExceptSelf([1, 2, 3, 4]);
