'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // write your code here
  let jumlah = 0;

    if (angka < 2) {
        return hasil;
    } else {
        for (let i = 2; i <= angka; i++) {
            if (angka % i === 0) {
                jumlah = Math.floor(angka / i);
                hasil.push(i);
                return prime_factors(jumlah, hasil);
            }
        }
    }
}

console.log(prime_factors(1))
console.log(prime_factors(3))  // [3]
console.log(prime_factors(6))  // [2,3]
console.log(prime_factors(8))  // [2,2,2]
console.log(prime_factors(25)) // [5,5]
console.log(prime_factors(123123123)) // [3, 3, 41, 333667]

// -----------------------------------------------------------------------------

// Release 1

let simple_recursive = (number) => {
  // write your code here
  let str = number.toString();
  if (str.length === 1) {
	   return parseInt(str);
  } else {
    	  let angka = 1;
    	  for (let i = 0; i < str.length; i++) {
    		  angka *= parseInt(str[i]);
    	  }
    	  return simple_recursive(angka);
  }

}



console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
