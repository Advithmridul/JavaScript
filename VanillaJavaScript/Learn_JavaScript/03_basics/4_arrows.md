# this Keyword

`this` keyword is reffering to the current context. This this case of object you will see that this is this is reffering to the user `object` context.

```JavaScript
const user = {
    username: "Mridul",
    userID: "Ak9104M99",
    welcomeMessage: function (){
        console.log(`Hi ${this.username}, welcome to website.`)
    }
}
 


// here we created user object, in which we define  username, userID and welcomefunction.

// here we use this keyword. this keyword is operating in current context.

user.welcomeMessage()  // Output:- Hi Mridul, welcome to website.

// here we saw that this is able to access the username.

// What happens if name is changed

user.username = "Sahil"   // here username context in user object is changed.

user.welcomeMessage()   // Output:- Hi Sahil, welcome to website.

// Now as username is changed with the help of this keyword it is able to print new name. So, context of username is changed this is able to change name accordengly.
```

## Now what happens and how this is working
```JavaScript
const user = {
    username: "Mridul",
    userID: "Ak9104M99",
    welcomeMessage: function (){
        console.log(`Hi ${this.username}, welcome to website.`)
    }
}
```
### we will print this inside user object.

```JavaScript
const user = {
    username: "Mridul",
    userID: "Ak9104M99",
    welcomeMessage: function (){
        console.log(`Hi ${this.username}, welcome to website.`)
        console.log(this)
    }
}

user.welcomeMessage()
```

- Here is context of this keyword.
### Output:- 
```
Output:- 

Hi Mridul, welcome to website.
{
  username: 'Mridul',
  userID: 'Ak9104M99',
  welcomeMessage: [Function: welcomeMessage]
}
```
```JavaScript
console.log(this)   // Output:- {}
```

- Here we can see value of this is {} empty object
- NOTE:- This is print empty object only in node engine.

- Inside Borwser engine is will return Window object as - we can see,
``` 
Output from browser:-
Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
```

# Arrow Function in Details

```JavaScript
function coffee(){
    console.log(this);
}

coffee()
/*
Output:- 
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/
```

### Now we will see whethter this is working with function or not
```JavaScript
function chai(){
    const username = "Mridul"
    console.log(this.username);
}

chai()   // Output:- undefined

const chai = function(){
    let username = "Mridul";
    console.log(this.username);
}

chai()   // Output:- undefined
// Here also returning the same value 

const chai = () => {
    let username = "Mridul";
    console.log(this)   // Output:- {}
    console.log(this.username);  // Output: undefined
}

chai()
```

### With regular function
`this` refers to the object that called the function or the global object (in non-strict mode).

### with arrow function
`this` is lexically bound, meaning it inherits this from the surrounding code context.


### Arrow Function for sum of two number
```JavaScript
const sumOfTwoNumber = (num1, num2) => {
    return num1 + num2
}

console.log(sumOfTwoNumber(12, 23)) // Output:- 35
```

### Implicit return 
```JavaScript
const sumOfTwoNumber = (num1, num2) =>  num1+num2

console.log(sumOfTwoNumber(12, 23)) // Output:- 35
```

# Explanation:
- Arrow Function: The function is defined using the arrow syntax () =>.
- Parameters: It takes two parameters, num1 and num2.
- Implicit Return: Since the function consists of a single expression, the result of num1 + num2 is automatically returned without needing the return keyword.

### Wraping inside parentheses
```JavaScript
const sumOfTwoNumber = (num1, num2) =>  (num1+num2)

console.log(sumOfTwoNumber(12, 23)) // Output:- 35
```
- If you wrap inside curli_bracket then you have to write return keyword. 
- If you wrap inside parentheses then you don't need return keyword.

### Object returning inside arrow function
```JavaScript 
const user = () => {username:"Mridul"}  

console.log(user()) // Output:- undefined
```

```JavaScript 
const user1 = () => ({username: "Mridul Advith"})

console.log(user1())  // Output:- { username: 'Mridul Advith' }
```