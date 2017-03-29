'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  if (angka < 2){
    return hasil;
  } else {
    for (let i = 2; i <= angka; i++){
      if(angka%i===0){
        hasil.push(i);
        return prime_factors(angka/i,hasil)
      }
    }
  }
}

console.log(prime_factors(3))  // [3]
console.log(prime_factors(6))  // [2,3]
console.log(prime_factors(8))  // [2,2,2]
console.log(prime_factors(25)) // [5,5]
console.log(prime_factors(123123123)) // [3, 3, 41, 333667]

// -----------------------------------------------------------------------------

// Release 1

let simple_recursive = (number) => {
  var temp = 1;
  var temp_2 = String(number);
  if (temp_2.length === 1){
    return number;
  } else {
    for (var i = 0; i < temp_2.length  ;i++){
      temp = temp * Number(temp_2[i]);
    }
    return simple_recursive(Number(temp));
  }
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
