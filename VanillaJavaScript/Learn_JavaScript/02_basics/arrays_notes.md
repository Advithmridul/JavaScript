# 1_array_summary

# Array

- In js array you can initilise different datatype which is not allowed in other programming language like c/c++. 
```JavaScript
const arrBox = [0, 1, 2, 3, 4, 5, "Mridul", 29.99, true]
```
- The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

# Description
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
- JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
- JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
- JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
- JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

# Array.prototype.slice()
The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
```JavaScript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

# Syntax
```JavaScript
slice()
slice(start)
slice(start, end)
```

# Parameters
### start
Zero-based index at which to start extraction, converted to an integer.

 - Negative index counts back from the end of the array— if -array.length <= start < 0, start + array.length is used.
 - If start < -array.length or start is omitted, 0 is used.
 - If start >= array.length, an empty array is returned.

 ### end
 Zero-based index at which to end extraction, converted to an integer. slice() extracts up to but not including end.

 - Negative index counts back from the end of the array — if -array.length <= end < 0, end + array.length is used.
 - If end < -array.length, 0 is used.
 - If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be extracted.
 - If end implies a position before or at the position that start implies, an empty array is returned.

## Return value
A new array containing the extracted elements.

# Description
The slice() method is a copying method. It does not alter this but instead returns a shallow copy that contains some of the same elements as the ones from the original array.

The slice() method preserves empty slots. If the sliced portion is sparse, the returned array is sparse as well.

The slice() method is generic. It only expects the this value to have a length property and integer-keyed properties.

# Array.prototype.splice()
The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

# Try it
```JavaScript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```
## Syntax
```JavaScript
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```
## Parameters
### start
Zero-based index at which to start changing the array, converted to an integer.

 - Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
 - If start < -array.length, 0 is used.
 - If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
 - If start is omitted (and splice() is called with no arguments), nothing is deleted. This is different from passing undefined, which is converted to 0.

### deleteCount
An integer indicating the number of elements in the array to remove from start.

If deleteCount is omitted, or if its value is greater than or equal to the number of elements after the position specified by start, then all the elements from start to the end of the array will be deleted. However, if you wish to pass any itemN parameter, you should pass Infinity as deleteCount to delete all elements after start, because an explicit undefined gets converted to 0.

If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

item1, …, itemN Optional
The elements to add to the array, beginning from start.

If you do not specify any elements, splice() will only remove elements from the array.

## Return value
An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.

# Description
The splice() method is a mutating method. It may change the content of this. If the specified number of elements to insert differs from the number of elements being removed, the array's length will be changed as well. At the same time, it uses [Symbol.species] to create a new array instance to be returned.

If the deleted portion is sparse, the array returned by splice() is sparse as well, with those corresponding indices being empty slots.

The splice() method is generic. It only expects the this value to have a length property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.


# Spread syntax (...)
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.

# Try it
```JavaScript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6
```
# Syntax
```JavaScript
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }
```

# Description
Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:

- Function arguments list (myFunction(a, ...iterableObj, b))
- Array literals ([1, ...iterableObj, '4', 'five', 6])
- Object literals ({ ...obj, key: 'value' })

Although the syntax looks the same, they come with slightly different semantics.

Only iterable values, like Array and String, can be spread in array literals and argument lists. Many objects are not iterable, including all plain objects that lack a Symbol.iterator method:

```JavaScript
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

On the other hand, spreading in object literals enumerates the own properties of the value. For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.

```JavaScript
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

All primitives can be spread in objects. Only strings have enumerable own properties, and spreading anything else doesn't create properties on the new object.

```JavaScript
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```
When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit. See Function.prototype.apply() for more details.


# Shallow copy
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

More formally, two objects o1 and o2 are shallow copies if:

- 1. They are not the same object (o1 !== o2).
- 2. The properties of o1 and o2 have the same names in the same order.
- 3. The values of their properties are equal.
- 4. Their prototype chains are equal.

The copy of an object whose properties all have primitive values fits the definition of both a deep copy and a shallow copy. It is somewhat useless to talk about the depth of such a copy, though, because it has no nested properties and we usually talk about deep copying in the context of mutating nested properties.

For shallow copies, only the top-level properties are copied, not the values of nested objects. 
Therefore:
- Re-assigning top-level properties of the copy does not affect the source object.
- Re-assigning nested object properties of the copy does affect the source object.

In JavaScript, all standard built-in object-copy operations (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), and Object.assign()) create shallow copies rather than deep copies.

Consider the following example, in which an ingredientsList array object is created, and then an ingredientsListCopy object is created by copying that ingredientsList object.

```JavaScript
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["noodles",{"list":["eggs","flour","water"]}]
```
Re-assigning the value of a nested property will be visible in both objects.

```JavaScript
ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array [ "rice flour", "water" ]
```
Re-assigning the value of a top-level property (the 0 index in this case) will only be visible in the changed object.
```JavaScript
ingredientsListCopy[0] = "rice noodles";
console.log(ingredientsList[0]); // noodles
console.log(JSON.stringify(ingredientsListCopy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredientsList));
// ["noodles",{"list":["rice flour","water"]}]

```

# Deep copy
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.

Two objects o1 and o2 are structurally equivalent if their observed behaviors are the same. 
These behaviors include:

1. The properties of o1 and o2 have the same names in the same order.
2. The values of their properties are structurally equivalent.
3. Their prototype chains are structurally equivalent (although when we deal with structural equivalence, these objects are usually plain objects, meaning they both inherit from Object.prototype).
4. Structurally equivalent objects can either be the same object (o1 === o2) or copies (o1 !== o2). Because equivalent primitive values always compare equal, you cannot make copies of them.

We can now define deep copies more formally as:
1. They are not the same object (o1 !== o2).
2. The properties of o1 and o2 have the same names in the same order.
3. The values of their properties are deep copies of each other.
4. Their prototype chains are structurally equivalent.

Deep copies may or may not have their prototype chains copied (and often they do not). But two objects with structurally non-equivalent prototype chains (for example, one is an array and the other is a plain object) are never copies of each other.

The copy of an object whose properties all have primitive values fits the definition of both a deep copy and a shallow copy. It is somewhat useless to talk about the depth of such a copy, though, because it has no nested properties and we usually talk about deep copying in the context of mutating nested properties.

In JavaScript, standard built-in object-copy operations (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), and Object.assign()) do not create deep copies (instead, they create shallow copies).

One way to make a deep copy of a JavaScript object, if it can be serialized, is to use JSON.stringify() to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object:
```JavaScript
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
```

Because a deep copy shares no references with its source object, any changes made to the deep copy do not affect the source object.
```JavaScript
// Change the value of the 'list' property in ingredientsListDeepCopy.
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredientsList[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

However, while the object in the code above is simple enough to be serializable, many JavaScript objects are not serializable at all — for example, functions (with closures), Symbols, objects that represent HTML elements in the HTML DOM API, recursive data, and many other cases. Calling JSON.stringify() to serialize the objects in those cases will fail. So there's no way to make deep copies of such objects.

The web API structuredClone() also creates deep copies and has the advantage of allowing transferable objects in the source to be transferred to the new copy, rather than just cloned. It also handles more data types, such as Error. But note that structuredClone() isn't a feature of the JavaScript language itself — instead it's a feature of browsers and other JavaScript hosts that implement web APIs. And calling structuredClone() to clone a non-serializable object will fail in the same way that calling JSON.stringify() to serialize it will fail.