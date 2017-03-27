'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // write your code here

  if (angka < 2) {
    return hasil;
  } else {
    for (var i = 2; i <= angka; i++) {
      if(angka%i === 0) {
        var angkaBaru = Math.floor(angka/i);
        hasil.push(i);
        return prime_factors(angkaBaru, hasil);
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
  // write your code here

  if (String(number).length === 1) {
    return number;
  } else {
    var multi = 1;
    var str = String(number);
    var strArr = str.split("");
    var strArrLen = strArr.length;
    for (var i in strArr) {
      multi *= Number(strArr[i]);
    }
    return simple_recursive(multi);
  }
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
