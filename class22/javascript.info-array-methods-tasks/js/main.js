//JAVASCRIPT.INFO: ARRAY METHODS - TASKS
//https://javascript.info/array-methods





// Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

let string = "-webkit-transition";

function camelize(str){
    let result = str
        .split('-')
        .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
    
    return result.charAt(0).toLowerCase() + result.slice(1);
}

console.log(camelize(string));





// Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b){
//     let newArray = [];
//     arr.map(item => {
//         if((item >= a) && (item <= b)){
//             newArray.push(item)
//         }
//     });
//     return newArray
// }


// function filterRange(arr, a, b) {
//     // added brackets around the expression for better readability
//     return arr.filter(item => (a <= item && item <= b));
// }



// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)





// Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

let numsArr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--; // Decrement i to check the next element at the current position
        }
    }
}

filterRangeInPlace(numsArr, 1, 4); // removed the numbers except from 1 to 4

alert( numsArr ); // [3, 1]






// Sort in decreasing order
let array = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

array.sort((a,b) => b - a);

// function sortDecreasingOrder(arr){
//     arr.sort((a,b) => b - a)
// }

// sortDecreasingOrder(array);

alert( array ); // 8, 5, 2, 1, -10







// Copy and sort array
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let programmingLanguages = ["HTML", "JavaScript", "CSS"];

const copySorted = arr => arr.slice().sort();

// function copySorted(arr) {
//     return arr.slice().sort();
// }

let sorted = copySorted(programmingLanguages);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( programmingLanguages ); // HTML, JavaScript, CSS (no changes)





// Create an extendable calculator
// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

// Usage example:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.


// function Calculator() {
//     this.methods = {
//         "-": (a,b) => a - b,
//         "+": (a,b) => a + b
//     };

//     this.calculate = function(str) {

//         let split = str.split(' '),
//             a = +split[0]
//             op = split[1],
//             b = +split[2];

//         if(!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.methods[op](a,b);
//     };

//     this.addMethod = function(name, func){
//         this.methods[name] = func;
//     };
// }


// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10


// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8






// Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(object => object.name)

// console.log( names ); // John, Pete, Mary





// Map to objects
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id,
// }));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// So, actually you need to map one array of objects to another. There’s a small catch.










// Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// const sortByAge = arr => arr.sort((a,b) => a.age - b.age);

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete









// Shuffle an array
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:


// let arr = [1, 2, 3];

// const shuffle = array => {
//     for(let i = array.length - 1; i > 0; i--){
//         // Generate a random index between 0 and i (inclusive)
//         let j = Math.floor(Math.random() * (i + 1));

//         // Swap elements array[i] and array[j]
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }



// console.log(shuffle(arr));
// // arr = [3, 2, 1]

// console.log(shuffle(arr));
// // arr = [2, 1, 3]

// console.log(shuffle(arr));
// // arr = [3, 1, 2]
// // ...











// Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// const getAverageAge = users => users.reduce((acc, user) => acc + user.age, 0) / users.length;

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28









// Filter unique array members
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:


// function unique(arr) {
//     let result = [];

//     for(let str of arr){
//         if(!result.includes(str)){
//             result.push(str);
//         }
//     }
//     return result;
// }
  
// let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  
// console.log( unique(strings) ); // Hare, Krishna, :-O








// Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:


let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}

console.log(groupById(users));

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/



// The reduce method is used to transform the array into an object.
// The callback function takes two parameters: obj (the accumulator object) and value (the current item in the array).
// obj[value.id] = value; assigns the current item to the object, using the id as the key.
// The initial value of obj is an empty object {}.