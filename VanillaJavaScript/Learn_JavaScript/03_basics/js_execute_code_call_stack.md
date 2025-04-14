# JavaScript Execution Context 
- In our code first of all Global Execution Context will formed always.
- When ever global execution context is formed then it will be sotred in this variable.


The JavaScript Execution Context is a concept that describes the environment in which JavaScript code is executed. It contains information about the code being executed and the context in which it runs. Understanding the execution context is fundamental to grasp how JavaScript manages scopes, variables, and functions.

## Components of JavaScript Execution Context
1. Global Execution Context (GEC):

   - This is the default context in which code runs when the script first loads.
   - In the browser, the global context is the window object. In Node.js, it's the global object.
   - It includes the global object and a special variable called this which refers to the global object itself.
   - All global variables and functions are added to this context.

2. Function Execution Context (FEC):

   - Whenever a function is invoked, a new execution context is created specifically for that function.
   - Each function call creates its own execution context, which contains:
   - Variable Object (VO): Contains function arguments, inner variable declarations, and function declarations.
   - Scope Chain: References the current function's variable object and the variable objects of its parent execution contexts.
   - this Binding: Refers to the object that invoked the function.

3. Eval Execution Context:

   - When JavaScript code is executed inside an eval() function, it also creates a new execution context.
   - This context is generally avoided due to security and performance issues.

## Phases of Execution Context

1. Creation Phase:

   - Before the execution starts, JavaScript performs the following in the creation phase:
     - Variable Object (VO) is created: It includes the function arguments, variables, and function declarations.
     - Scope chain is established: The function's scope chain is created, linking the function’s context to its parent context.
     - this is determined: The value of this is set based on how the function was called.
2. Execution Phase:

   - In this phase, JavaScript executes the code line by line.
   - Variables are assigned their values, and function invocations take place.

## Call Stack and Execution Context
- Call Stack: JavaScript uses a call stack to manage the execution contexts.
  - When a function is called, a new execution context is pushed onto the stack.
  - When the function finishes executing, its context is popped off the stack.
  - The call stack ensures that functions are executed in the correct order.

## Scope and Scope Chain
- Scope: The current context of execution, i.e., the environment in which variables and expressions are accessible or where a function is declared.
- Scope Chain: When a variable is referenced, JavaScript looks in the current execution context's scope. If not found, it checks the outer context's scope, continuing up the scope chain until the variable is found or the global scope is reached.

## Example
```JavaScript
var globalVar = "I am global";

function outerFunction() {
    var outerVar = "I am outer";

    function innerFunction() {
        var innerVar = "I am inner";
        console.log(innerVar);   // Output: I am inner
        console.log(outerVar);   // Output: I am outer
        console.log(globalVar);  // Output: I am global
    }

    innerFunction();
}

outerFunction();
```

## In the above example:

- The global execution context is created first, containing globalVar and outerFunction.
- When outerFunction is called, a new function execution context is created.
- When innerFunction is called, yet another execution context is created.
- The scope chain allows innerFunction to access variables from its own context, outerFunction's context, and the global context.