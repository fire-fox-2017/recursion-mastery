'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
    // write your code here
    if (angka == 1) {
        return hasil
    } else {
        for (let x = 2; x <= angka; x++) {
            if (angka % x === 0) {
                hasil.push(x)
                return prime_factors(angka/x , hasil)
            }
        }
    }
}

// console.log(prime_factors(28))  // [1,2,7]
console.log(prime_factors(3)) // [3]
console.log(prime_factors(6)) // [2,3]
console.log(prime_factors(8)) // [2,2,2]
console.log(prime_factors(25)) // [5,5]
console.log(prime_factors(123123123)) // [3, 3, 41, 333667]

// -----------------------------------------------------------------------------

// Release 1

let simple_recursive = (number) => {
    // write your code here
    var string = String(number).split('')
    let temp = string.reduce(function(str, data) {
        return str * data
    }, 1);

    return temp < 10 ? temp : simple_recursive(temp)
}

console.log(simple_recursive(39)) // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3)) // 3

module.exports = {
    simple_recursive,
    prime_factors
}
