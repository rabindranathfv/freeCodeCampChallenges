// sol 1 es5-es6

function isPrime(numero) {
console.log("Has pasado el numero: " + numero);
  console.log("Inicio bucle desde 2 hasta " + (numero - 1));

  for (var i = 2; i < numero; i++) {

    console.log("Modulo entre " + numero + " y " + i + " = " + (numero % i));

    if (numero % i === 0) {
      console.log(numero + " no es un numero primo porque " + i + " es un multiplo");
      return false;
    }

  }
  // if num pass for loop is prime
  return true;
  console.log("-------------------------------------");
}

function sumPrimes(num) {
  let answer = 0;
  let primesArr = [];
  for(let i = 2; i <= num; i++ ) {
    // check if he is prime or not
    // console.log("probando si " + i + " es primo");
    if (isPrime(i)) {
      primesArr.push(i);
    }  
  }
  console.log(primesArr);
  return answer = primesArr.reduce( (a,b) => {
    return a+b;
  });
  console.log(answer);
}

sumPrimes(10);
