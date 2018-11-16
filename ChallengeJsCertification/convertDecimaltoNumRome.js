// sol 1

function convertToRoman(num) {
    // check if valid
    if (typeof(num) !== 'number') {
        return;
    }
    let romansObjct = {
        "1000": "M",
        "900": "CM",
        "500": "D",
        "400": "CD",
        "100": "C",
        "90": "XC",
        "50": "L",
        "40": "XL",
        "10": "X",
        "9": "IX",
        "5": "V",
        "4": "IV",
        "1": "I"
    };
    // get keys array and sorted to
    let keys = Object.keys(romansObjct).sort((a, b) => (b - a));
    console.log(keys);
    let answer = "";

    keys.forEach((key) => {
        while (num >= key) {
            answer += romansObjct[key];
            console.log(answer);
            num -= key;
            console.log(key);
        }
    });
    return answer;
}

// sol 2

convertToRoman(3999);