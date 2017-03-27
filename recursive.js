'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // var factor = 0
   for (var i=2; i<=angka; i++) {
     if (angka/i === 1) {
       hasil.push(i)
       return hasil
   } else if (angka%i == 0) {
       hasil.push(i);
      //  factor = i;
       return prime_factors(angka/i, hasil)
     }
   }
}

// console.log(prime_factors(3))  // [3]
// console.log(prime_factors(6))  // [2,3]
// console.log(prime_factors(8))  // [2,2,2]
// console.log(prime_factors(25)) // [5,5]
// console.log(prime_factors(123123123)) // [3, 3, 41, 333667]

// -----------------------------------------------------------------------------

// Release 1

let simple_recursive = (number) => {
  if (number === 0) {
    return 1
  }else if (number.toString().length < 2) {
    return number
  } else if(number.toString().length > 1) {
    var result = number.toString().split("")
    var sum = 1
    for (var i=0; i <result.length; i++) {
      sum = sum * result[i];
    }
    return simple_recursive(sum)
    }
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
