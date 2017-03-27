'use strict'

// -----------------------------------------------------------------------------

// Release 0
function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}
function multiply (array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
            sum = sum * array[i];
    }
    return sum;
}
let prime_factors = (angka, hasil = []) => {
var factors=[];
for (var i=2; i<=angka; i++){
    if (angka % i === 0){
      factors.push(i);
    }
}
for (var j=0; j<factors.length; j++){
  if(isPrime(factors[j])){
    hasil.push(factors[j]);
  }
}
while (multiply(hasil) !== angka){
  if(isPrime(angka/multiply(hasil))){
    hasil.push(angka/multiply(hasil));
  } else{
    hasil.push(hasil[0]);
  }
}
return hasil.sort();
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
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
