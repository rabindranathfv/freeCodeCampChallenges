// solution 1

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  // reg exp the \s representante spaces
  // reg exp ?!^)([A-Z]) grab a capitalize letters and add an space
  return str.replace(/(?!^)([A-Z])/g, ' $1')
            .replace(/(\W|_|\s)+/gi,'-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
