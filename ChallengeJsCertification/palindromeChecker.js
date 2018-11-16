function palindrome(str) {
    // reg express to delete all special simbos and _ from string
    let reg = /\W|_/gi;
    // replace with reg exp
    let word = str.replace(reg, '').toLowerCase();
    return word === word.split('').reverse().join('');
}


palindrome("My age is 0, 0 si ega ym.");