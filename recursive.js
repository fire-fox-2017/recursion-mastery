'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // write your code here
  var a = 1
    var b = 2
    while(angka >= b){
      if(angka % b == 0){
        hasil.push(b)
        return prime_factors(angka/b, hasil)
      } else {
        b = b+a
        a = 2
      }
    }
  return hasil
}

console.log(prime_factors(3))  // [3]
console.log(prime_factors(6))  // [2,3]
console.log(prime_factors(8))  // [2,2,2]
console.log(prime_factors(25)) // [5,5]
console.log(prime_factors(123123123)) // [3, 3, 41, 333667]

// -----------------------------------------------------------------------------

// Release 1

let simple_recursive = (number) => {
  // write your code here
  number = String(number).split("")
  if(number.length === 1){
    return number;
  }
  else {
    var result = 1;
    for(var i = 0; i < number.length; i++){
      result *= number[i];
    }
  }
  return simple_recursive(result)
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
