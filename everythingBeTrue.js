// using every for check all properties with trusty values using every
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every( (obj) => {
      return obj[pre];
    });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
