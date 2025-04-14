// // Immediately Invoked Function Expressions (IIFE)

// /* 
// -> This invoke function expressions emmrdiately.

// Then question arise why do we need this type of function?
// -> This is because sometimes we wants that file will imidetally executed as we have run it. Or sometime we are writing code and we don't want global variable cause issue or else.
// */

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()
// /* 
// Right now this is't any problem but in case of global variable pollution we use IIFE to solve it.
// */
// // IIFE 

// function chai {
//     console.log(`DB CONNECTIED`);
// }()
// // Here you can notice this parenthesis is showing error to solve that we will write like this

// (function chai() {
//     console.log(`DB CONNECTED`);
// })();
// // Wrapping function inside parenthesis gives us block and we can work on block.

// /* Interview Question :-
// What is IIFE and why we need it?
// -> It get immediately invoke and it is use to prevent the pollution of global variable
// */

// /* Special Case :-
// (function chai() {
//     console.log(`DB CONNECTED`);
// })()

// (function chaiAurCode() {
//     console.log(`DB CONNECTED Two`);
// })()

// Here chai function don't able to close so is is giving type error

// Instead of writing this we us semi-colun at the end
// */
// (function chai() {
//     console.log(`DB CONNECTED`);
// })();

// (function chaiAurCode() {
//     console.log(`DB CONNECTED Two`);
// })();
// // Now after semi-colun it is working perfectly 

// // Arrow Function 
// ( chai = () => {
//     console.log(`Arrow DB CONNECTED`);
// })();

// // Passing variable
// (coffee = (name) => {
//     console.log(`DB Connected to ${name}`)
// })("Mridul");