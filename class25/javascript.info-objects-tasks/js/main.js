//JAVASCRIPT.INFO: OBJECTS - TASKS
//https://javascript.info/object
//Objects




// Hello, object

// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.



let user = {
  name: "John",
  surname: "Smith",
}

user.name = "Pete";


delete user.name;
console.log(user.name);//undefined










// Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

let schedule = {};

function isEmpty(obj){
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}


console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false











// Sum object properties
// importance: 5
// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.


function calcSum(salaries){
  let sum = 0;

  for(let key in salaries){
    sum += salaries[key];
  }
  return sum;
}


console.log(calcSum(salaries));//390


//OR


let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}









// Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(obj){
  for(let key in obj){
    if(typeof obj[key] === "number"){
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);//returns nothing, check menu obj in console

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.













//JAVASCRIPT.INFO: OBJECTS - TASKS
//https://javascript.info/object-copy
//Object references and copying


//No tasks for this section





//JAVASCRIPT.INFO: OBJECTS - TASKS
//https://javascript.info/garbage-collection
//Garbage collection


//No tasks for this section





//JAVASCRIPT.INFO: OBJECTS - TASKS
//https://javascript.info/object-methods
//Object methods, "this"



// Using "this" in object literal
// importance: 5
// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?









// Create a calculator
// importance: 5
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );










// Chaining
// importance: 2
// There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
// Now, if we need to make several calls in sequence, we can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
// Modify the code of up, down, and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Such an approach is widely used across JavaScript libraries.





//JAVASCRIPT.INFO: OBJECTS - TASKS
//https://javascript.info/constructor-new
//Constructor, operator "new"


//There are tasks, add them :)