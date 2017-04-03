'use strict'

// -----------------------------------------------------------------------------
// Release 0
let prime_factors = (angka,hasil = []) => {
  for(let i=2; i<=angka;i++)
    {
      if(angka%i===0)
      {
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
  // write your code here
  var string = number.toString();
  var arrString = string.split("");
   if(string.length===1)
   {
     return Number(string);
   }
   else {
     number=arrString.reduce(function(total,num){return total*num;});
     number+=1;
     return simple_recursive(number-1);
   }
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
