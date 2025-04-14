console.log("Hello World!, I am node.js");
// console.log(window);    // --------- Workes in browser only
// alert("Hello");            // --------- Workes in browser only


// Improting module form other file
const maths = require("./maths");

// console.log("Summation of two number is", maths.add(12, 6), "and Subtraction of two number is", maths.sub(12, 6));

console.log("Summation of two number is", maths.addFun(12, 6), "and Subtraction of two number is", maths.subFun(12, 6));