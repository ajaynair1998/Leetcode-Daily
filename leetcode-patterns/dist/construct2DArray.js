"use strict";
function construct2DArray(original, m, n) {
    let finalArray = [];
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(original[i + j]);
        }
        finalArray.push(row);
    }
    return finalArray;
}
let debugData = construct2DArray([1, 2, 3, 4], 2, 2);
console.log("🚀 ~ file: construct2DArray.ts ~ line 10 ~ debugData", debugData);
