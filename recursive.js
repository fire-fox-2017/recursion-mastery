'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // kumpulan bilangan prima
  let factorNum;
  if(angka === 1) {
    return hasil;
  } else {
    for(var i = 2; i <= angka; i++) {
      if(angka % i === 0) { //1) angka = 8. i = 2 //2) angka = 4. i = 2 //3) angka = 2. i = 2
        hasil.push(i); //1) 2 //2) 2 //3) 2
        factorNum = i; //1) 2 //2) 4 //3) 2
        return prime_factors(angka/factorNum, hasil) //1) 8/2 = 4. //2) 4/2 = 2. //3) 2/2 = 1.
      }
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
  var numInString = number.toString();
  var numInArr;
  var result = 1;

  if(number === 0) {
    return 1;
  } else if(numInString.length < 2) {
    return number;
  } else if(numInString.length > 1) {
    numInArr = numInString.split(''); // 39 jadi [3,9];
    numInArr.forEach(function(val) {
      return result *= val;
    });
    return simple_recursive(result);
  }
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
