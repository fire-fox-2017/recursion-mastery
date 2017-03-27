'use strict'

// -----------------------------------------------------------------------------

// Release 0
let prime_factors_iterative = (angka, hasil = []) => {
  // write your code here
  let temp = angka;

  // if(temp % )

  let i = 2;
  for ( ; i<=temp ; i++) {
    debugger;
    let prime = true;
    if(temp % i === 0) {

      // here check if the factor is prime

      for(let j=2; j<i ; j++){
        if(i % j === 0) {
          prime = false;
        }
      }

      if(prime) {
        hasil.push(i);
        temp = temp/i;
        i = 1;
      }

    }

  }


  return hasil;
}

console.log(prime_factors_iterative(4))  // [2, 2]
console.log(prime_factors_iterative(123123123)) // [3, 3, 41, 333667]
console.log("---");


let prime_factors = (angka, hasil = []) => {
  // base case
  if(angka == 1)
    return hasil;

  if(!hasil)
    hasil = 2;

  let i = hasil;
  let temp = angka;
  let result = [];

  if ( temp % i === 0 ) {
    // i is a prime number?

    prime_factors(angka/i, hasil);
  }
  else {
    prime_factors(angka, hasil+1);
  }

}

console.log(prime_factors(4))  // [2, 2]


// console.log(prime_factors(3))  // [3]
// console.log(prime_factors(6))  // [2,3]
// console.log(prime_factors(8))  // [2,2,2]
// console.log(prime_factors(25)) // [5,5]
// console.log(prime_factors(123123123)) // [3, 3, 41, 333667]

// -----------------------------------------------------------------------------

// Release 1

let simple_recursive = (number) => {
  // write your code here



}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
