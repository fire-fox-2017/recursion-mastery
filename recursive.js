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

console.log(prime_factors(39)) // [3]
console.log(prime_factors(6)) // [2,3]
console.log(prime_factors(8)) // [2,2,2]
console.log(prime_factors(25)) // [5,5]
console.log(prime_factors(123123123)) // [3, 3, 41, 333667]

// -----------------------------------------------------------------------------

// Release 1

let simple_recursive = (number) => {

    let temp_number = String(number);
    let huruf = temp_number.split('');

    let hasil = huruf.reduce(function(a, b) {
        return a * b;
    }, 1);

    let angka = String(hasil).split('');

    if (angka.length == 1) {
        let return1 = angka.join('');
        return parseInt(return1);
    } else {
        let return2 = angka.join('');
        let return2_angka = parseInt(return2)
        return simple_recursive(parseInt(return2_angka));
    }
}

console.log(simple_recursive(39)) // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3)) // 3


module.exports = {
    simple_recursive,
    prime_factors
}
