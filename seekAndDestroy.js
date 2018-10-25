
// Intermediate Algorithm Scripting: Seek and Destroy

// solution 1

function destroyer(arr) {
  // Remove all the values
  for(let index = 0; index < arguments.length ; index++) {
    //console.log(arguments[index]);
    for (let i = 0; i < arr.length ; i++) {
      if((arr[i] === arguments[index])) {
        delete arr[i];
      }
    }
  }
  // console.log("retornara "+ arr);
  //using falsy values
  return arr.filter( (elem) => elem );
}

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")
