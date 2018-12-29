function addTogether( a, b ) {
  let checkNum = (num) => {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  // Check if we have two parameters, check if they are numbers
  if (arguments.length > 1) {
    let a = checkNum(arguments[0]);
    let b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    let c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    if (checkNum(c)) {
      return (arg2) => {
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          return c + arg2;
        }
      };
    }

  }
  
}

addTogether(2,3);
