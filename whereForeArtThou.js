// Solution 1

function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  // Only change code below this line
  let dataKeys = Object.keys(source);
  let dataValues = Object.values(source);
  console.log(dataKeys);
  console.log(dataValues);
  let collectionKeys = Object.keys(collection);
  let collectionValues = Object.values(collection);
  for(let index = 0; index < dataKeys.length ; index++) {
    //console.log(dataKeys[index]);
    //console.log(dataValues[index]);
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
