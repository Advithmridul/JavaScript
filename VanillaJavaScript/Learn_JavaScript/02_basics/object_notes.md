# Object Destructure 

Object destructuring is a feature in JavaScript that allows you to extract properties from objects and assign them to variables in a concise way. This makes it easier to work with objects, especially when dealing with complex data structures.

## Examples
``` JavaScript
const course = {
    courseName: "JavaScript Development",
    courseNo: 101,
    courseInstructure: "Mridul"
};

const {courseInstructure: instructure} = course

console.log(instructure)

const {courseName: cName} = course
console.log(cName)

// In ReactJS we use props
// const navbar = (props.company) => {

// }

// // Instead of props we use destructring like
// const navbar = ({company}) => {
    
// }
// navbar(company = "MridulTech")
```

### More Basic Syntax

Here’s a simple example of object destructuring:
``` JavaScript
const user = {
  name: "John",
  age: 30,
  location: "New York"
};

// Destructuring
const { name, age, location } = user;

console.log(name); // "John"
console.log(age);  // 30
console.log(location); // "New York"

```

### Renaming Variables
You can also rename the variables while destructuring:
```JavaScript
const user = {
  name: "John",
  age: 30,
  location: "New York"
};

// Renaming variables
const { name: userName, age: userAge, location: userLocation } = user;

console.log(userName); // "John"
console.log(userAge);  // 30
console.log(userLocation); // "New York"

```

### Default Values
If a property doesn’t exist in the object, you can provide a default value:
```JavaScript
const user = {
  name: "John",
  age: 30
};

// Providing default value for location
const { name, age, location = "Unknown" } = user;

console.log(name); // "John"
console.log(age);  // 30
console.log(location); // "Unknown"
 ```
### Nested Objects
You can also destructure nested objects:

 ```JavaScript
const user = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001"
  }
};

// Destructuring nested objects
const { name, address: { city, zip } } = user;

console.log(name); // "John"
console.log(city); // "New York"
console.log(zip);  // "10001"
 ```

### Using Rest Operator
You can use the rest operator (...) to collect the remaining properties into another object:

 ```JavaScript
const user = {
  name: "John",
  age: 30,
  location: "New York"
};

// Using the rest operator
const { name, ...otherDetails } = user;

console.log(name); // "John"
console.log(otherDetails); // { age: 30, location: "New York" }
 ```

# JSON API 
A JSON API is an API (Application Programming Interface) that sends and receives data in the JSON (JavaScript Object Notation) format. JSON APIs are commonly used in web development to enable communication between the client (e.g., a web browser) and the server.

### How JSON API Works

- Client Request: The client sends an HTTP request to the server. This request could be a GET, POST, PUT, DELETE, etc., depending on the operation the client wants to perform.

- Server Processes Request: The server processes the request and performs the necessary operations, such as querying a database, modifying data, or triggering some other server-side logic.

- Server Response: The server sends back an HTTP response to the client. The body of this response is typically in JSON format, containing the data requested or the result of the operation.

## Example of a JSON API
Let's say we have a simple RESTful API for managing users.

GET Request: Retrieve User Information
```HTTP
GET /api/users/1 HTTP/1.1
Host: example.com

```
###Response:
```JSON
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}

```

### POST Request: Create a New User
```HTTP
POST /api/users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 25
}

```
### Response:
```JSON
{
  "id": 2,
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 25,
  "createdAt": "2024-08-30T10:00:00Z"
}

```

### PUT Request: Update an Existing User
```HTTP
PUT Request: Update an Existing User
```
### Response:
```JSON
{
  "id": 1,
  "name": "John Smith",
  "email": "john@example.com",
  "age": 31,
  "updatedAt": "2024-08-30T10:05:00Z"
}
```

### DELETE Request: Remove a User
```JSON
DELETE /api/users/1 HTTP/1.1
Host: example.com
```
### Response:
```JSON
{
  "message": "User deleted successfully"
}
```
# Key Concepts

- Endpoints: URLs where the API is accessed, e.g., /api/users/1.
- HTTP Methods: Define the operation, e.g., GET (retrieve), POST (create), PUT (update), DELETE (remove).
- Status Codes: Indicate the result of the request, e.g., 200 OK, 201 Created, 404 Not Found, 500 Internal Server Error.
- Headers: Provide metadata, e.g., Content-Type: application/json.
- Body: The actual data sent or received, usually in JSON format.

# Advantages of JSON APIs
1. Lightweight: JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
2. Language-Agnostic: JSON is text-based and can be used with almost any programming language.
3. Easy to Use: JSON APIs are straightforward to use, especially when working with JavaScript on the client side.

# Common Use Cases
- Web Applications: To fetch or send data asynchronously (e.g., using fetch or axios in JavaScript).
- Mobile Apps: To communicate with a backend server for user authentication, data retrieval, etc.
- Microservices: To enable communication between different services in a distributed system.

# Tools for Working with JSON APIs
- Postman: For testing and interacting with APIs.
- Insomnia: Another API testing tool.
- cURL: A command-line tool for sending HTTP requests.
- Axios: A popular JavaScript library for making HTTP requests.

JSON APIs are an essential part of modern web development, allowing for seamless communication between the client and server.