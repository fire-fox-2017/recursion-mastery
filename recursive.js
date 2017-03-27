'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  for( var i = 2; i <= angka; i++ ){
    if (angka % i === 0) {
      hasil.push(i);
      return prime_factors(angka/i,hasil);
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
var arr = number.toString().split("");
var arnum=[];
var sum=1;
for (var i=0; i<arr.length; i++){
   arnum.push(Number(arr[i]))
}
for (var j=0; j<arnum.length; j++){
  sum*=arnum[j];
}
if (arnum.length!==1) {
arnum.splice(0,arnum.length,sum).toString().split("");
return simple_recursive(arnum);
}
return arnum;
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
