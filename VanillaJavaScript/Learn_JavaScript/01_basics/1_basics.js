"use strict";  // treate all code of js as newer version of JavaScript

// alert("Hello");  // alert will not work as we are using nodeJS not browser.

// console(3 
//     + 
//     4
// )    // Code readability should be high.

// * Datetype:-

let name = "Mridul"
let age = 24
let isLoggedIn = false

// number => 2 to power 53
// bigint 
// string => ""
// boolean => true/false
// null => Standalone Value
// undefined => 
// symbol => unique

// object
console.log(typeof "Mridul")
console.log(typeof age)
console.log(typeof undefined)
console.log(typeof null)  // It is object



/*

1. Global Scope
Variables declared outside any function or block have a global scope.
These variables are accessible from anywhere in your code.
Example:
let globalVar = "I am global";

function printGlobal() {
  console.log(globalVar); // Accessible
}

printGlobal();
console.log(globalVar); // Accessible

Characteristics:
Global variables are available everywhere.
Be cautious! Overusing global variables can lead to naming conflicts or accidental overwrites.

2. Local/Function Scope
Variables declared inside a function are in function scope and can only be accessed within that function.
Example:
function sayHello() {
  let message = "Hello, world!";
  console.log(message); // Accessible
}

sayHello();
console.log(message); // Error: message is not defined
Characteristics:
Variables defined with var, let, or const inside a function are limited to that function.

3. Block Scope
Variables declared with let or const inside a block ({}) are only accessible within that block.
Example:
if (true) {
  let blockVar = "I am block-scoped";
  console.log(blockVar); // Accessible
}

console.log(blockVar); // Error: blockVar is not defined
Characteristics:
let and const respect block scope, while var does not (it’s function-scoped).

4. Module Scope
Variables declared inside a module (e.g., in an ES6 module file) are scoped to that module and not accessible globally.
Example:
module1.js
export const moduleVar = "I am module-scoped";
main.js
import { moduleVar } from './module1.js';
console.log(moduleVar); // Accessible because it's imported
Characteristics:
Module scope helps in encapsulation and prevents variable conflicts between files.

In JavaScript, scope determines where variables, functions, or objects are accessible within your code. Here are the main types of scopes:

1. Global Scope
Variables declared outside any function or block have a global scope.
These variables are accessible from anywhere in your code.
Example:
javascript
Copy code
let globalVar = "I am global";

function printGlobal() {
  console.log(globalVar); // Accessible
}

printGlobal();
console.log(globalVar); // Accessible
Characteristics:
Global variables are available everywhere.
Be cautious! Overusing global variables can lead to naming conflicts or accidental overwrites.
2. Local/Function Scope
Variables declared inside a function are in function scope and can only be accessed within that function.
Example:
javascript
Copy code
function sayHello() {
  let message = "Hello, world!";
  console.log(message); // Accessible
}

sayHello();
console.log(message); // Error: message is not defined
Characteristics:
Variables defined with var, let, or const inside a function are limited to that function.
3. Block Scope
Variables declared with let or const inside a block ({}) are only accessible within that block.
Example:
javascript
Copy code
if (true) {
  let blockVar = "I am block-scoped";
  console.log(blockVar); // Accessible
}

console.log(blockVar); // Error: blockVar is not defined
Characteristics:
let and const respect block scope, while var does not (it’s function-scoped).
4. Module Scope
Variables declared inside a module (e.g., in an ES6 module file) are scoped to that module and not accessible globally.
Example:
module1.js

javascript
Copy code
export const moduleVar = "I am module-scoped";
main.js

javascript
Copy code
import { moduleVar } from './module1.js';
console.log(moduleVar); // Accessible because it's imported
Characteristics:
Module scope helps in encapsulation and prevents variable conflicts between files.
5. Lexical (Static) Scope
Lexical scope means that the scope of a variable is determined by its position in the source code, not the call stack.
Inner functions can access variables from their parent functions.
Example:
function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); // Accessible because of lexical scope
  }

  inner();
}

outer();
Characteristics:
Closures take advantage of lexical scoping.

6. Dynamic Scope (Not in JavaScript)
JavaScript does not support dynamic scope, but languages like Bash do.
In dynamic scope, the variable’s scope depends on the runtime call stack.
Comparison of var, let, and const Scoping
Feature	var	let	const
Scope	        Function	Block	        Block
Re-declaration	Allowed	    Not Allowed  	Not Allowed
Re-assignment	Allowed   	Allowed	Not     Allowed

*/