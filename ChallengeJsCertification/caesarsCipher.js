function rot13(str) { // LBH QVQ VG!
    // rot-13 object
    let rot13Obj = {
        "A": "N",
        "B": "O",
        "C": "P",
        "D": "Q",
        "E": "R",
        "F": "S",
        "G": "T",
        "H": "U",
        "I": "V",
        "J": "W",
        "K": "X",
        "L": "Y",
        "M": "Z",
        "N": "A",
        "O": "B",
        "P": "C",
        "Q": "D",
        "R": "E",
        "S": "F",
        "T": "G",
        "U": "H",
        "V": "I",
        "W": "J",
        "X": "K",
        "Y": "L",
        "Z": "M",
        "a": "n",
        "b": "o",
        "c": "p",
        "d": "q",
        "e": "r",
        "f": "s",
        "g": "t",
        "h": "u",
        "i": "v",
        "j": "w",
        "k": "x",
        "l": "y",
        "m": "z",
        "n": "a",
        "o": "b",
        "p": "c",
        "q": "d",
        "r": "e",
        "s": "f",
        "t": "g",
        "u": "h",
        "v": "i",
        "w": "j",
        "x": "k",
        "y": "l",
        "z": "m"
    }

    // console.log(keys);
    let answer = "";
    // get sring into array
    let word = str.split('');
    console.log(word);
    word.forEach((letter) => {
        answer = (letter in rot13Obj) ? answer += rot13Obj[letter] : answer += letter;
    });
    return answer;
}
// Change the inputs below to test
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");