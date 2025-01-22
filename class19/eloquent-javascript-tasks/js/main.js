//What chapter?????????


// The sum of a range
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].


// function range(start, end, step = 1){
//     let array = [];
//     if(step === Math.abs(step)){
//         for(let i = start; i <= end; i += step){
//             array.push(i);
//         }
//     }else{
//         for(let i = start; i >= end; i += step){
//             array.push(i);
//         }
//     }
//     return array
// }
// console.log(range(5,2,-1)); // [5,4,3,2]


// function sum(array) {
//     return array.reduce((total, num) => total + num, 0);
// }
// console.log((sum(range(5,2,-1)))); // 14




// Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?


//Reverse Array
// let myArray = ["A", "B", "C"];

// function reverseArray(arr){
//     let newArray = [];

//     for(let i = 0; i < arr.length; i++){
//         newArray.unshift(arr[i])
//     }
//     return newArray
// }

// console.log(reverseArray(myArray));
// // → ["C", "B", "A"];

// console.log(myArray);
// // → ["A", "B", "C"];






//Reverse Array In Place


// let arrayValue = [1, 2, 3, 4, 5];

// function reverseArrayInPlace(arr) {
//     let halfArrayLength = Math.floor(arr.length / 2);

//     for (let i = 0; i < halfArrayLength; i++) {
//         let temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }

//     return arr;
// }

// console.log(reverseArrayInPlace(arrayValue)); // → [5, 4, 3, 2, 1]

// console.log(arrayValue); // → [5, 4, 3, 2, 1]












//A LIST

// 1) Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 

// let list = {
//     value: 1,
//     rest: {
//       value: 2,
//       rest: {
//         value: 3,
//         rest: null
//       }
//     }
// };


let array = [1,2,3];

function arrayToList(arr){
    let list = null;

    for(let i = arr.length - 1; i >= 0; i--){
        list = {
            value: arr[i], 
            rest: list
        };
    }
    return list;
}

console.log(arrayToList(array));



// 2) Also write a listToArray function that produces an array from a list. 

let list1 = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
};

function listToArray(list){
    let array = [];

    while (list !== null) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
}

console.log(listToArray(list1));


// 3) Add the helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list.

// Example usage:
let list = {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
};

function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}
  
let newList = prepend(1, list);
console.log(newList);
  

// 4) Add the helper funtion nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

// Example usage:
let list2 = {
  value: 2,
  rest: {
    value: 3,
    rest: null
  }
};

function nth(num, list){
   if (list === null) return undefined;

   if (num === 0) return list.value;

   return nth(num - 1, list.rest);
}

console.log(nth(1, list2)); // 3




// 5) If you haven’t already, also write a recursive version of nth.


//nth is already recursive - see line 192












// Deep comparison
// The == operator compares objects by identity, but sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (using the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.





function deepEqual(a, b){
   // Check for strict equality
   if (a === b) return true;

   // Check if both values are objects (and not null)
   if (a === null || b === null || typeof a !== "object" || typeof b !== "object") {
     return false;
   }
 
   // Get the keys of both objects
   let keysA = Object.keys(a);
   let keysB = Object.keys(b);
 
   // Check if both objects have the same number of keys
   if (keysA.length !== keysB.length) return false;
 
   // Check if all keys and their values are equal using recursion
   for (let key of keysA) {
     // Check if the key exists in both objects and their values are deepEqual
     if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
       return false;
     }
   }
 
   // If all checks pass, the objects are deeply equal
   return true;
}


let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));// → true
console.log(deepEqual(obj, {here: 1, object: 2}));// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // → true









