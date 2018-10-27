function translatePigLatin(str) {
  let val = '';
  let regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    val = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    let vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    val = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return val;
}

translatePigLatin("consonant");
