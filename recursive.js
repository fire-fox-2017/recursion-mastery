'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // write your code here
  var arrPrime=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    var temp1=0;
    var temp2="";
    for(let i=0;i<10;i++){
      var status="notyet";
      for(let j=0;j<arrPrime.length;j++){
        temp1=angka/arrPrime[j];
        temp2=temp1.toString();
        if(temp2.indexOf(".")<0&&status=="notyet"){
          hasil.push(arrPrime[j]);
          angka=angka/arrPrime[j];
          status="done";
        }
        if(i==9&&angka!=arrPrime[j]){
          status="akhir";
        }
      }
      if(status=="akhir")
      {
        hasil.push(angka);
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

let simple_recursive = (Vnumber) => {
  // write your code here
  var result="";
  var akhir=0,long=0;
  var status="";
  do{
    var Snum=Vnumber;
    var NSnum=Snum.toString();
    var temp=1;
    if(NSnum.length>1){
      status="tidak normal";
    for(let i=0;i<NSnum.length;i++){
      if(i==(NSnum.length-1)){
          temp=temp* NSnum.charAt(i);
          result+= NSnum.charAt(i)+" = "+temp+", ";
          Vnumber=temp;
        }else{
          result += NSnum.charAt(i)+"*";
          temp=temp*NSnum.charAt(i);
        }
      }
    }else {
      if(status=="tidak normal"){
        akhir=Vnumber;
        result=akhir+" karena "+result;
      }else {
        result=Vnumber+" karena "+Vnumber+" hanya 1 angka.";
      }
    }
    temp=0;
    long=NSnum.length;
  }while(long>1);
  return result;
}
console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3

module.exports = {
  simple_recursive,
  prime_factors
}
