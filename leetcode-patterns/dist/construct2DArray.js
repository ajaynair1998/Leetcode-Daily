"use strict";
function construct2DArray(original, m, n) {
    let finalArray = [];
    if (m * n > original.length || m * n < original.length) {
        return [];
    }
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(original[n * i + j]);
        }
        finalArray.push(row);
    }
    return finalArray;
}
