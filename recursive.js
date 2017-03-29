'use strict'

let prime_factors = (angka, hasil=[]) => {
   var bool=true;
  var i=1;
  var sisa;

  while(bool && i<angka){
    i++;
      if((angka/i)%1===0){
        sisa=angka/i;
        bool=false;
        console.log(angka+" "+sisa);
      }
  }
  if(bool==true){
    return hasil;
  }else{
      hasil.push(i);
      return prime_factors(sisa,hasil);
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
  let num = number.toString();
  let tampung=1;
  if(num.length===1){
    return num;
  }else{
    for(let i=0;i<num.length;i++){
      tampung *=parseInt(num[i]);
    }
    return simple_recursive(tampung);
  }
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
