// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/* 
The reason is that an equlity check == and comprasions > < >= <= work sifferently.
Comprasion convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.
So, null means empty not zero.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);

