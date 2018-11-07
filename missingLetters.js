// SOLUTION ES5

function fearNotLetter(str) {
  let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let strSplited = str.split('');
  let result;
  let find = false;
  let index = letters.indexOf(strSplited[0]);
  console.log(index);
  for(let i= 0; i < strSplited.length ; i++) {
    console.log("data "+strSplited[i]);
    console.log("abecedario "+letters[index]);
    if (strSplited[i] !== letters[index]) {
      console.log("entro y asignara a result " + letters[index]);
      result = letters[index];
      find = true;
     }
  index++;
    if (find) {
      break;
    }
  console.log(index);
  }
  return result;
  
}

// SOLUTION ES6

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

fearNotLetter("stvwx");
