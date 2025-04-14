// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`) 
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }




// ------------------------------------------- Self Evaluation ------------------------------------------------------------------
// const mappingContries = new Map()

// mappingContries.set('Ind',"India")
// mappingContries.set('Eng', "England")
// mappingContries.set("SL", "Sri Lanka")
// mappingContries.set('Aus', "Australia")
// mappingContries.set("SA", "South Africa")

// for (const contry of mappingContries) {
//     console.log(contry);
// }

const bricsCountries = new Map()

bricsCountries.set('Bra', "Brasil")
bricsCountries.set('Rus',"Russia")
bricsCountries.set('Ind', "India")
bricsCountries.set('Roc', "China")
bricsCountries.set('RSA', "South Africa")

// console.log(bricsCountries)

console.log("Member of BRICS countries in array")
for (const brics of bricsCountries) {
    // console.log(brics)
}

// Destructuring of array
// console.log("Member of BRICS countries")
for (const [bricsInitials, bricsCountry] of bricsCountries) {
    // console.log(bricsInitials, ":-", bricsCountry)
}

// const gameList = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }


// for (const [key, value] of gameList) {
//     console.log(key, ':-', value);
//     // Output:- TypeError: gameList is not iterable
// }

// const gameList2 = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key, value] of gameList2) {
//     console.log(key, ':-', value);
//     // Output:- TypeError: gameList is not iterable
// }