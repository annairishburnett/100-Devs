//JAVASCRIPT.INFO: FUNCTION BASICS - TASKS


// Is "else" required?

// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

// Will the function work differently if else is removed?
//No, it will still work the same. 




function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

// Is there any difference in the behavior of these two variants?

//No, they behave the same way. If age is greater than 18, they both return true, if no, they both ask you to confirm "Did parents allow you?"









// Rewrite the function using '?' or '||'

// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?

const checkAge1 = age => age > 18 ? true : confirm('Did parents allow you?');

// Using OR ||

const checkAge2 = age => age > 18 || confirm('Did parents allow you?');








// Function min(a, b)

// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


function min(a,b){
    //return Math.min(a,b);
    //OR
    if(a < b){
        return a;
    }else{
        return b;
    }
}

console.log(min(10,3));










// Function pow(x,n)

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// Run the demo

// P.S. In this task the function should support only natural values of n: integers up from 1.


function pow(x,n){
    //return Math.pow(x,n);
    //OR
    let result = x;
    for(let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}

console.log(pow(3,2)); //9





function pow2(){
    let x = prompt('Enter a number for x:')
    let n = prompt('Enter a number for n:')
    let result = x;
    
    for(let i = 1; i < n; i++){
        result *= x;
    }

    console.log(result);
}

pow2(); 