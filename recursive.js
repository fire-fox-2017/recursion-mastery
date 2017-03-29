'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // write your code here
  var x = 2;
  var y = 1;
while(angka >= x){
  if(angka % x == 0){
    hasil.push(x);
    return prime_factors(angka/x, hasil);
  }else{
    x+= y;
    y= 2;
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
  // write your code here
  var str = number.toString().split("");
  var num =1;
  if (str.length == 1){
    return number;
  }
  for (var i=0; i < str.length; i++){
    num *=str[i];
  }
  return simple_recursive(num);
//   for (var i=0; i < str.length ; i++){
//     if(str.length == 1 ){
//       return num *=str[i];
//     }else{
//     num *= str[i];

//     }
//     console.log(num);
//   }
}





console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
