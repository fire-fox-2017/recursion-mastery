'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // write your code here
  var temp=0;
  var awal=2;
  if(angka<awal){
    return hasil;
  }else if(angka=>awal){
    for(let i=awal;i<=angka;i++){
      if(angka%i==0){
        temp=angka/i;
        hasil.push(i);
        return prime_factors(temp,hasil);
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

let simple_recursive = (Vnumber) => {
  // write your code here\
  var Snum=Vnumber;
  var NSnum=Snum.toString();
  var temp=1;
  if(NSnum.length==1){
    return Vnumber;
  }else{
    for(let i=0;i<NSnum.length;i++){
      temp=temp*Number(NSnum.charAt(i));
    }
    return simple_recursive(temp);
  }
}
console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
