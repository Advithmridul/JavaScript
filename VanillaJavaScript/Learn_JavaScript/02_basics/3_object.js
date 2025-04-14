// // singleton:- When we declare object as a literals it don't form singleton
// // Object.create

// // Object Literals
// const jsUser = {
//     name: "Mridul",   // This name is written like name:"Mridul" but system proccessed it like "name":"Mridul",
//     age: 18,
//     location: "Jaipur",
//     email:"mridul@yahoo.com"
// }

// // console.log(jsUser.email);
// // console.log(jsUser["email"]);

// jsUser.greeting = function(){
//     console.log("Hello jsUser");
// }

// jsUser.greetingTwo = function(){
//     console.log(`Hello jsUser ${this.name}`);
// }

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());
// console.log("-------------------------------------")
// console.log(jsUser.greetingTwo);
// console.log(jsUser.greetingTwo());

// Singleton object or object through constructor

// const tinderuser = new Object();
// // const tinderUser = {} // This is object literals and its output is empty.
// console.log(tinderuser)  // It will gives empty object {}

// // Using Object Literal Notation
// const tinderuser = {
//     name: "John Doe",
//     age: 25,
//     gender: "Male",
//     location: "New York"
// };

// console.log(tinderuser);



// // Using Dot Notation
// const tinderuser = new Object();
// tinderuser.name = "John Doe";
// tinderuser.age = 25;
// tinderuser.gender = "Male";
// tinderuser.location = "New York";

// console.log(tinderuser);

// // Using Bracket Notation
// const tinderuser = new Object();
// tinderuser["name"] = "John Doe";
// tinderuser["age"] = 25;
// tinderuser["gender"] = "Male";
// tinderuser["location"] = "New York";

// console.log(tinderuser);


// const obj1 = {
//     1:"a",
//     2:"b",
//     3:"c"
// }

// const obj2 = {
//     4:"d",
//     5:"e",
//     6:"f"
// }

// const obj3 = Object.assign({}, obj1, obj2); // We are passing empty array because all others array will work in first one.
// console.log(obj3);

// // console.log({}, ...obj1, ...obj2);
// const obj4 = {...obj1, ...obj2};
// console.log(obj4);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('location'));

// // Object de-structure
// const course = {
//     courseName: "JavaScript",
//     coursePrice: 999,
//     courseInstructor:"Mridul"
// }

// // course.courseInstructor;
// const {courseInstructor} = course;
// console.log(courseInstructor);

// const {courseName: couNa} = course;   // Here we gave our own name for courseName as couNa
// console.log(couNa);

