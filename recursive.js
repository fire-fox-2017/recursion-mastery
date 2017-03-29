'use strict'

// -----------------------------------------------------------------------------

// Release 0
let prime_factors = (angka, hasil = []) => {
  // write your code here
  let tampungHasil;
  let i=2

  do{
    if(angka%i==0){
      hasil.push(i);
      tampungHasil = angka/i;
      break;
    }
    i++
  }while(i<=angka);

  if(tampungHasil === 1){
     return hasil;
  }
  return prime_factors(tampungHasil, hasil);
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

  let jadiString = String(number);
  let pecah = jadiString.split('');
  let panjangAngka = pecah.length;
  let i;
  let hasilperkalian=1;
  for(i=0;i<panjangAngka;i++)
  {
    hasilperkalian=hasilperkalian*pecah[i];
  }

  if(panjangAngka>1)
  {
    return simple_recursive(hasilperkalian);
  }

  else
  {
    return number;
  }
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
