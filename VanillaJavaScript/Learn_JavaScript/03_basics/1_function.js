// const sayMyName = () => {
//   console.log("My name is Mridul.");
// };

// sayMyName();

// const addTwoNumber = (number1, number2) => {
//   return number1 + number2;
// };

// console.log(addTwoNumber(3, 5));

// const loggedInUserMessage = (userName) => {
//     if(userName === undefined){
//         console.log("Please enter user name");
//         return;
//     }
//     return (`${userName} just logged in`);
// }

// console.log(loggedInUserMessage("Mridul"));  // Here we passed value as Mridul and output is Mridul just logged in.
// console.log(loggedInUserMessage(""));  // here is an empty string as value and output is  just logged in.
// console.log(loggedInUserMessage());    // here is an empty function as value and output is undefined just logged in.



// const loggedInUserMessage = (userName = "AK") => {
//     if(userName === undefined){
//         console.log("Please enter user name");
//         return;
//     }
//     return (`${userName} just logged in`);
// }

// console.log(loggedInUserMessage("Mridul")); 
// console.log(loggedInUserMessage()); 
// console.log(loggedInUserMessage(""));
// // Here AK become default value

// // ------------------------------------------------- Function Soping cart ------------------------------------------------------------------

// const calculateShoppingCartPrice = (number1) => {
//     return number1;
// }

// console.log(calculateShoppingCartPrice(200, 300, 400, 600));
// /* In this calculateShoppingCartPrice, we can see that if we are passing more than one number in our function then it is only printing first price i.e. 200 in this case.

// To solve this we use REST Operator which is same as SPREAD Operator. Weather it is spred or rest it is depends on there working.

// Now example for rest operator.
// */

// const calculateShoppingCartPrice1 = (...number1) => {
//     return number1;
// }

// console.log(calculateShoppingCartPrice1(200, 300, 400, 600));
// /* Now we can see it is returning all values. Notice that it is in the array */

// // -->> what if we pass some other value with rest operator. For example
// const calculateShoppingCartPrice2 = (val1, val2, ...number1) => {
//     // This will print 200 and 300
//     console.log(val1, val2);
//     return (number1);
// }

// console.log(calculateShoppingCartPrice2(200, 300, 400, 600));
// // We noticed that only 400 and 600 get printed other two or we say first two in this case is went to val1 and val2

// // ----------------------------------------------------------------------------------------------------------------------------
// const user = new Object();
// user.name = "Mridul";
// user.email = "mridul@yahoo.in";
// user.age = 23;

// const handleObject = (anyObject_name) => {
//     console.log(`The user name is ${anyObject_name.name} and user email is ${anyObject_name.email}. Also User age is ${anyObject_name.age}.`);
// } 

// handleObject(user);
// /* We can also write it like 
//  handleObject({
//  username: "Mridul",
//  useremail: "mridul@yahoo.in",
//  userAge: 23
//  })
// */

// // ----------------------------------------------------------------------------------------------------------------------------
// const myArray = [100, 200, 400, 600];

// const handleArray = (anyArray_name) => {
//     return anyArray_name[1];
// }

// console.log(handleArray(myArray));
// /* We can also write it like 
//   console.log([100, 200, 400, 600]);
// */