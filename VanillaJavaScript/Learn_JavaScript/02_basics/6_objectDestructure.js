// Object Destructure
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

// JSON API 

// {
//     "name": "Mridul",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]