// ES5 -ES6 Solution
function sumFibs(num) {
    // create an array of fib numbers till num
    let fibArr = [1];
    for (var i = 1; i <= num;) {
        fibArr.push(i);
        i = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    }

    // return the sum of odd numbers from the array
    let res = fibArr.reduce((second, firts) => {
        return (firts % 2 !== 0) ? second + firts : second;
    });
    return res;
}

// sol 2 using filter and reduce
function sumFibs(num) {
    // create an array of fib numbers till num
    let fibArr = [1];
    for (var i = 1; i <= num;) {
        fibArr.push(i);
        i = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    }

    // return the sum of odd numbers from the array
    let total = fibArr.filter((num) => {
        return num % 2 !== 0;
    }).reduce((a, b) => {
        return a + b;
    });
    return total;
}

// test here
sumFibs(75024);