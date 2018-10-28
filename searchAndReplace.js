// soltio 1

function myReplace(str, before, after) {
  // gettig index
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  str = str.replace(before, after);

  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
