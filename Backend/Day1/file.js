const fs = require("fs");

/* 
There are two ways for file operation 
Sync (also known as blocking code)
Async (also known as non-blocking code)
*/

// // ****************************** ----- Write ----- *************************
// // ------------------- sync write -------------
// fs.writeFileSync("./text.txt", "Hey world this is sync writing.");  

// // ------------------ async write and it always expect callback --------------
// fs.writeFile("./test.txt", "Hey world this is async writing. \n", (err) => {
//     if(err) throw err;
//     console.log('File written successfully!');
// })   

// ****************************** ----- Read ----- *************************

// // ------------ sync read -----------------
// const res = fs.readFileSync("./text.txt", 'utf8');   
// console.log(res);  

// // ------------------- async read ------------------
// fs.readFile("./text.txt", 'utf8', (err, res) => {
//     if(err) throw err;
//     console.log(res);
// })

// // ****************************** ----- Update ----- *************************

// // ------------ sync update -----------------
// // fs.appendFileSync('./text.txt', new Date().toDateString());


// // ------------ async update -----------------
// fs.appendFile('./test.txt', `Hello node.js, this is Mridul and loggedIn at ${new Date().toDateString()}.\n`, (err, res) => {
//     if(err) throw err;
//     console.log("LoggedIn Successfully.", res);
// })


/*
cpSync
unlinkSync
mkdirSync
stateSync
mkdirSync
*/

// // ****************************** ----- Delete ----- *************************
//  ------------ sync delete -----------------
//  fs.unlinkSync('./text.txt');

//  ------------ async delete -----------------
//  fs.unlink('./test.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted');
//   });
  

// // ****************************** ----- Copy files or directories ----- *************************
// //  ------------ sync Copy file -----------------
// fs.cpSync('./test.txt', './text.txt');

// //  ------------ async Copy file -----------------
// fs.cp('./codeF.txt', './source.txt', (err) => {
//     if(err) throw err;
//     console.log("File copy sucessfully.");
// })

// // ****************************** ----- Create a directory ----- *************************
// //  ------------ sync Create file -----------------
// // fs.mkdirSync('./logs', { recursive: true });

// //  ------------ async Create file -----------------
// fs.mkdir('./Code',  { recursive: true }, (err) => {
//     if (err) throw err;
// })


// // ****************************** ----- Get file or folder metadata ----- *************************
// //  ------------ sync metadata -----------------
// const stats = fs.statSync('./test.txt');
// console.log(stats.isFile(), stats.size);


// //  ------------ async metadata -----------------
// fs.stat('./test.txt', (err, stats) => {
//     if (err) throw err;
//     console.log(stats.isFile(), stats.size);
//   });
  

