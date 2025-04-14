const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


// ------------------------------------------- Self Evaluation ------------------------------------------------------------------
const programmingLanguage = {
    'js': "JavaScript",
    'cpp': "C++",
    'py': "Python",
    'jsx': "JSX for ReactJS"
}

// console.log("Keys of an object:-")
for (const key in programmingLanguage) {
//    console.log(key)
}

// console.log("Values of a key in object:-")
for (const key in programmingLanguage) {
    // console.log(programmingLanguage[key])
 }

 for (const key in programmingLanguage) {
    // console.log(`${key} shortcut is for ${programmingLanguage[key]}`)
 }

 const bricsCountries = new Map()

bricsCountries.set('Bra', "Brasil")
bricsCountries.set('Rus',"Russia")
bricsCountries.set('Ind', "India")
bricsCountries.set('Roc', "China")
bricsCountries.set('RSA', "South Africa")

// console.log(bricsCountries)

console.log("Member of BRICS countries in array")
for (const key in bricsCountries) {
    console.log(key)   // Output :- It returns nothing because Map is not ittteratable.
}

