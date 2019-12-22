// sol 1 es5-es6

function isPrime(numero) {

    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    // if num pass for loop is prime
    return true;
}

function sumPrimes(num) {
    let answer = 0;
    let primesArr = [];
    for (let i = 2; i <= num; i++) {

        if (isPrime(i)) {
            primesArr.push(i);
        }
    }
    console.log(primesArr);
    return answer = primesArr.reduce((a, b) => {
        return a + b;
    });
}

sumPrimes(10);