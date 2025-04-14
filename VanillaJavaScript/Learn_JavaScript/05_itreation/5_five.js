const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )


// ------------------------------------------- Self Evaluation ------------------------------------------------------------------
const programmingLanguage = ["JavaScript", "C++", "Java", "Python", "C#"]
// normal function
programmingLanguage.forEach(function (item){
    // console.log(item);
})
// arrow function
programmingLanguage.forEach((item) => {
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}

programmingLanguage.forEach(printMe);

const printMeArrow = (item) => {
    // console.log(item);
}

programmingLanguage.forEach(printMeArrow);

programmingLanguage.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


// *** Extra one
// let arr = [10, 20, 30, 40, 50];

// arr.forEach( (item, index) => {
//     setTimeout( () => {
//         console.log(item);
//     }, 1000 * index);
// });

const myCoding2 = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "C#",
        languageFileName: "c#"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
    // console.log(item.languageFileName);
})