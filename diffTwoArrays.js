// Intermediate Algorithm Scripting: Diff Two Arrays

// SOLUTION 1:

function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    arr1.forEach((elem) => {
        if (arr2.indexOf(elem) === -1) {
            newArr.push(elem);
        }
    });

    arr2.forEach((elem) => {
        if (arr1.indexOf(elem) === -1) {
            newArr.push(elem);
        }
    });
    console.log(newArr);
    return newArr;
}

// SOLUTION 2:

function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(
            data => !arr1.includes(data) || !arr2.includes(data)
        );
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Both Solutions Works, better solution 2