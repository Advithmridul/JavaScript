# Introduction
``` js
console.log("Hello World");
console.log(2);
console.log("Crio.Do");
```

# Primitive Data types

``` js
console.log(2);
console.log(-100.34567);
console.log(-90);
```

``` js
console.log('Crio.Do is the best place to learn by doing');

console.log(true);
console.log(false);
```

# typeof opeartor
``` js
console.log(typeof(5));
console.log(typeof(false));
console.log(typeof("HEllloooo"));

console.log(typeof(typeof(true))); //typeof('boolean') --->string
```

# Use case
``` js
console.log("James");
console.log(2);
console.log(3);
console.log(4);
console.log("J5");
console.log("J6");
console.log("J7");
console.log("James");
```

# VARIABLES (var, let, const)

## 1.var identifier

``` js
var a; //Declaration
a = 5; //Assignment

var a = 5; //Initialization

//console.log(a);

a=10; //Re-assignment is allowed in case of var identifier
//console.log(a);

var a =20;  //Re-declaration is also allowed in case of var identifier
// console.log(a);

var a ="crio";
console.log(a);

var b ="This is the long paragraph of 10,000 words";
console.log(b);
```

## Activity
``` js
var greeter = "hey hi";
console.log(greeter);
greeter = "say hello instead";
console.log(greeter);
```

## 2. const identifier
``` js
const c = 7;
// c=9; //Re-assignment is not allowed in case of const identifier
// console.log(c);

const c =10; //Re-declaration is nor allowed in case of const identifier
console.log(c)
```

## 3. let identifier
``` js
let a = 10;
console.log(a);

a=12; //Re-assignment is allowed in the case of let identifier
console.log(a);


let a = 20;//Re-declaration is allowed in the case of let identifier
console.log(a);
```

# Rules for valid variable names
``` js
var a; //valid
var _a; //valid
var $a;//valid

var 12_number; //invalid
var var; //invalid
var let; //invalid
var const; //invalid

var calculatePercentage //camelCase
```

# Null & Undefined
``` js
var a;     //unintentionally missing
console.log(a);

var b=null;
console.log(b);


var c = undefined;
console.log(c);


var percentage = null; //intentionally missing purposes

percentage = 50;
```