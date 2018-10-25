// Intermediate Algorithm Scripting: Sum All Numbers in a Range

function sumAll(arr) {
  let min = Math.min(arr[0],arr[1]);
  let max = Math.max(arr[0],arr[1]);
  let val = 0;
  for(let i=min; i <= max; i++) {
    val += i;
  }
  return val;
}

sumAll([1, 4]);
