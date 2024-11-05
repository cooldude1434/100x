// // // //  Assignment1
// // // function greet(user_input){
// // //     console.log(`Hello ${user_input.name}, you are ${user_input.age} years old`)
// // // }

// // // let user = {
// // //    name:"Rajini",
// // //    age:70
// // // }

// // // greet(user)

// // // Assignment2 & 3
// // // function greet(user_input) {
// // //     let greeting = user_input.gender === "M" ? "Mr." : user_input.gender === "F" ? "Ms." : "";
// // //     console.log(`Hello ${greeting} ${user_input.name}, you are ${user_input.age} years old`);

// // //     if (user_input.age > 18) {
// // //         console.log('Legal to vote');
// // //     } else {
// // //         console.log('Not Legal to vote');
// // //     }
// // // }

// // // let user = {
// // //     name: "Rajini",
// // //     age: 7,
// // //     gender: "F"
// // // };

// // // greet(user);

// // //Assignment 3

// // //Assignment 3
// // function filterEvenNumbers(numbers) {
// //     return numbers.filter(num => num % 2 === 0);
// // }

// // // Example usage
// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]

// //Assignment 4
// // Write a function that takes an array of users as inputs and 
// // returns only the users who are more than 18 years old

// function legal(users_array) {
//     console.log(users_array)
//     users_array1 = users_array.filter(users_array => users_array.age>18)
//     console.log(users_array)
//     return users_array1
// }

// const users = [{
//     name: "Harkirat",
//     age: 21
// }, {
//     name: "raman",
//     age: 10
// }
// ]

// const user1 = users[0] 
// const user1Age = users[0].age

// const legal_users = legal(users)
// console.log(legal_users)

// // Assignment5
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

function filterAdultMales(users) {
    return users.filter(user => user.age >= 18 && user.gender === "M");
}
const users = [
    {
        name: "harkirat",
        age: 19,
        gender: "M",
        address: {
            city: "Delhi",
            country: "India",
            address: "1122 DLF"
        }
    },
    {
        name: "sarah",
        age: 20,
        gender: "F",
        address: {
            city: "Mumbai",
            country: "India",
            address: "45 MG Road"
        }
    },
    {
        name: "raj",
        age: 17,
        gender: "M",
        address: {
            city: "Bangalore",
            country: "India",
            address: "22 Park Street"
        }
    }
];


const adultMales = filterAdultMales(users);
console.log(adultMales);