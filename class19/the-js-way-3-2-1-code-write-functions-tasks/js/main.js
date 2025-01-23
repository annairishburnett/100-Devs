//THE JS WAY
//CHAPTER 1 - 3, 2, 1... Code
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter01.md


// Coding time!
// Let's put your brand new coding skills into practice.



// Presentation
// Write a program that displays your name and age. Here's the result for mine: ("Baptiste" 40)


const name = 'Anna';
let age = 34;

console.log(name, age);






// Minimalistic calculator
// Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.



function minimalistCalculator(){
    console.log(6 + 3);
    console.log(6 - 3);
    console.log(6 * 3);
    console.log(6 / 3);
}

minimalistCalculator();






// Values prediction
// Observe the following program and try to predict the values it displays.

console.log(4 + 5); // 9
console.log("4 + 5"); // "4 + 5"
console.log("4" + "5"); // 45
// Check your prediction by executing it.











//THE JS WAY
//CHAPTER 2 - Play with variables
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter02.md


// Build a habit of choosing good variable names in all exercises, starting with these ones.



// Improved hello
// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

const firstName = 'Anna';
const lastName = 'Burnett'


const hello = (firstName, lastName) => alert(firstName + ' ' + lastName);

hello(firstName, lastName);






// Final values
// Observe the following program and try to predict the final values of its variables.

let a = 2;
a -= 1;
a++; 
let b = 8;
b += 2;

//a = 2
//b = 10
const c = a + b * b;//120
const d = a * b + b;//30
const e = a * (b + b);//40
const f = a * b / a;//10
const g = b / a * a;//10

console.log(a, b, c, d, e, f, g);
// Check your prediction by executing it.





// VAT calculation
// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.


function calculateVAT(){
    let price = Number(prompt('Enter a price to calculate price plus VAT:'));

    let pricePlusVAT = ((price * .206) + price).toFixed(2);

    alert(`$${pricePlusVAT}`)
}

calculateVAT();







// From Celsius to Fahrenheit degrees
// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

// !!! info: The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.




function celsiusToFahrenheit(){
    let degCelsius = Number(prompt('Enter degrees celsius to get Fahrenheit conversion:'));

    let degFahrenheit = degCelsius * 9/5 + 32;

    alert(degFahrenheit);
}

celsiusToFahrenheit();







// Variable swapping
// Observe the following program.

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)

let tempNumber1 = number1;

number1 = number2;

number2 = tempNumber1;

console.log(number1); // Should show 3
console.log(number2); // Should show 5
// Add the necessary code to swap the values of variables number1 and number2.

// !!! tip: This exercise has several valid solutions. You may use more than two variables to solve it.












//THE JS WAY
//CHAPTER 3 - Add conditions
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter03.md



// Here are a few pieces of advice about these exercises:
        // Keep on choosing your variable names wisely, and respect indentation when creating code blocks associated to if, else and switch statements.
        // Try to find alternative solutions. For example, one using an if and another using a switch.
        // Test your programs thoroughly, without fear of finding mistakes. It's a very important skill.



// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.







// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
















// Final values
// Take a look at the following program.

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
// Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.

// Initial values	nb1 final value	nb2 final value	nb3 final value
// nb1=nb2=nb3=4			
// nb1=4,nb2=3,nb3=2			
// nb1=2,nb2=4,nb3=0			
// Check your predictions by executing the program.












// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.










// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// This is not as simple as it seems... Look at the following results to see for yourself:

// 14h17m59s should give 14h18m0s
// 6h59m59s should give 7h0m0s
// 23h59m59s should give 0h0m0s (midnight)










//DON'T FORGET TO DO CHAPTER 5 QUESTIONS AT THE END OF THE DOCUMENT







//THE JS WAY
//CHAPTER 4 - Repeat statements
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md


// Try to code each exercise twice, once with a while loop and the other with a for, to see for yourself which one is the most appropriate.



// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.
// When it's done, improve it so that the number of turns is given by the user.


let count = 1;

while(count <= 10){
    console.log(`Turn number: ${count}`);
    count++
}


for(let i = 1; i <= 10; i++){
    console.log(`Carousel turn number: ${i}`);
}


function carousel(turns){
    for(let i = 1; i <= turns; i++){
        console.log(`Carousel turns: ${i}`);
    } 
}

carousel(15);





// Parity
// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}


// This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.

console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
console.log(20 % 3); // 2 because 20 = 3 * 6 + 2

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

// !!! info
// This program must show exactly 10 numbers including the first one, not 11 numbers!


for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
      console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`)
    }
}


function evenOrOdd(n){
    for(let i = n; i < n + 10; i++){
        if(i % 2 === 0){
          console.log(`Exactly 10: ${i} is even`);
        }else{
            console.log(`Exactly 10: ${i} is odd`)
        }
    }
}

evenOrOdd(5);






// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
// When you are done with the above, improve the program so that the terminating number is between 50 and 100.


function lessThanOrEqual100(){
    let num = Number(prompt('Enter a number:'));

    while(num > 100){
        num = Number(prompt('Enter a number:'));
    }
}
lessThanOrEqual100();


function between50And100(){
    let num = Number(prompt('Enter a number between 50 and 100:'));

    while(num < 50 || num > 100){
        num = Number(prompt('Enter a number between 50 and 100:'));
    }
}
between50And100();






// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.
// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).


function multiplicationTableForX(){
    let x = Number(prompt('Enter a number:'));

    console.log(`Multiplication Table for ${x}:`);
    for(let i = 1; i <= 10; i++){
        console.log(`${i} x ${x} = ${i * x}`)
    }
}
multiplicationTableForX();



function multiplicationTableForNum(){
    let num = Number(prompt('Enter a number between 2 and 9:'));

    
    if(num > 1 && num < 10){
        console.log(`Multiplication Table for ${num}:`);
        for(let i = 1; i <= 10; i++){
            console.log(`${i} x ${num} = ${i * num}`)
        }
    }else{
        console.log('invalid input');
    }
}
multiplicationTableForNum(2);




// Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.



function yesOrNo(){
    let input = prompt('Enter a word:').toLowerCase();

    while(input !== 'yes' && input !== 'no'){
            input = prompt('Enter a word. \'Yes\' or \'No\' ends the game:').toLowerCase();
        }
}


yesOrNo();





// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:
// It shows "Fizz" instead if the number is divisible by 3.
// It shows "Buzz" instead if the number is divisible by 5 and not by 3.
// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.



function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if((i % 3 === 0) && (i % 5 === 0)){
            console.log('FizzBuzz');
        }else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }
    }
}

fizzBuzz();










//THE JS WAY
//CHAPTER 5 - Write functions
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter05.md


// Improved hello
// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// TODO: ask user for first and last name
// TODO: call sayHello() and show its result




// Number squaring
// Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
  // TODO: complete the function code
}










// Square the given number x
const square2 = x => // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
// When it's done, update the program so that it shows the square of every number between 0 and 10.
// !!! info: Writing 10 dumb calls to `square()` is forbidden! You know how to repeat statements, don’t you? ;)








// Minimum of two numbers
// Let's pretend the JavaScript Math.min() function doesn’t exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// TODO: write the min() function

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1






// Calculator
// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// TODO: complete program

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity







// Circumference and area of a circle
// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// Here are some tips for solving this exercise:

// Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
// The value of number π (Pi) is obtained with Math.PI in JavaScript.
// You might want to use the exponentiation operator ** to perform computations.
console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3