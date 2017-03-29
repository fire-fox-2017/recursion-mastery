'use strict'

// -----------------------------------------------------------------------------
// Release 0
let prime_factors = (angka, hasil = []) => {
    for (var i = 2; i <= angka; i++){
      if (angka % i === 0){
        hasil.push(i);
        return prime_factors(angka/i, hasil);
    }
  }
    return hasil;
}

console.log(prime_factors(3))  // [3]
console.log(prime_factors(6))  // [2,3]
console.log(prime_factors(8))  // [2,2,2]
console.log(prime_factors(25)) // [5,5]
console.log(prime_factors(123123123)) // [3, 3, 41, 333667]

// -----------------------------------------------------------------------------

// Release 1

let simple_recursive = (number) => {

  var times = 1;
  var split = number.toString().split("");
  for (var i = 0; i < split.length; i++){
    times *= Number(split[i]);} {

    if (times.toString().split("").length > 1){
        return simple_recursive(times);
    }
else {
  return times;
}
  }
}
console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3



module.exports = {
  simple_recursive,
  prime_factors
}
