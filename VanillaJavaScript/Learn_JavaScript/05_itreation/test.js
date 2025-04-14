// const programmingLanguage = ["JavaScript", "C++", "Java", "Python", "C#"]

// const value = programmingLanguage.forEach( (item) => {
//     console.log(item);
// });

// console.log(value); 

// const myNums = [1,2,3,4,5,6,7,8,9,10];
// // *** filter function
// const newNums = myNums.filter( (nums) => nums % 2 == 0);
// const newNums2 = myNums.filter( (nums) => {
//     return nums % 2 == 0;
// })

// console.log(newNums2)

// // *** forEach function
// const newNums = []
// myNums.forEach( (nums) => {
//     if(nums > 5){
//         newNums.push(nums)
//     }
// })

// console.log(newNums)


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// // const userBook = books.filter( (items) => {
// //     return items.genre === 'History'
// // })

// // console.log(userBook)

// const userBook = books.filter((book) => book.genre === 'History');
// // console.log(userBook);

// const publishedBook = books.filter((book) => book.publish < 2000);

// const publishedBook2 = books.filter((book) => book.publish >= 2000 && book.genre === 'History'
// );

// console.log(...publishedBook);


const data = [
    {
        title:"iPhone-SE",
        price: 50000,
        model: 2024,
        company: "Apple Inc."
    },
    {
        title:"Fold",
        price: 250000,
        model: 2024,
        company: "Samsung Group"
    },
    {
        title:"iPhone-16",
        price: 150000,
        model: 2024,
        company: "Apple Inc."
    },
    {
        title:"Nothing2",
        price: 30000,
        model: 2024,
        company: "Nothing Inc."
    }
]

data.forEach((item) => {
    console.log(item.title) 
    console.log(item.company)
    console.log(item.price,",")
})