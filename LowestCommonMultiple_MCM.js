function smallestCommons(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    // creating and array start in a min and ends in max, and sorted to greater to lowest
    // let numbers = [...Array(max).keys()].map(i => i + min);
    let numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }
    numbers.sort((a, b) => b - a);
    let lcm = numbers[0];
    // all primes factor of each number in numbers
    for (let i = 1; i < numbers.length; i++) {
        // console.log(" using gcd with " + lcm + "  and " + numbers[i]);
        let GCD = gcd(lcm, numbers[i]);
        // console.log(GCD);
        lcm = (lcm * numbers[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) { // Implements the Euclidean Algorithm
        if (y === 0)
            return x;
        else
            return gcd(y, x % y);
    }
}


let answer = smallestCommons([2, 10]);
console.log(answer);