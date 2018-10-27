// Solution 1 fail 2 cases

function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  // Only change code below this line
  let dataKeys = Object.keys(source);
  let dataVales = Object.values(source);
  let collectionKeys = Object.values(collection);

  for(let index = 0; index < dataKeys.length ; index++) {
    arr = collection.filter( (elem) => {
      //console.log(elem[dataKeys[index]]);
      return ((elem[dataKeys[index]] === dataValues[index]) && (collectionKeys.length >= dataKeys.length));
    });
  } 
  
  // Only change code above this line
  console.log(arr);
  return arr;
}


whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });


// solution2 it's work fine

function whatIsInAName(collection, source) {
  // What's in a name?
  // Only change code below this line
  var dataKeys = Object.keys(source);

  return collection.filter( (obj) => {
    return dataKeys.every( (key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
