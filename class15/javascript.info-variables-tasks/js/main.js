//JAVASCRIPT.INFO: VARIABLES - TASKS



// Working with variables

// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin;
let name;

name = "John";
admin = name;

alert(admin); // John





// Giving the right name

// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?


let ourPlanetName = "Earth";
let currentUserName = "Elmo";







// Uppercase const?

// Examine the following code:

    const birthday = '18.04.1982';

    const age = someCode(birthday);

// Here we have a constant birthday for the date, and also the age constant.

// The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

// Would it be right to use upper case for birthday? For age? Or even for both?

    const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

    const AGE = someCode(BIRTHDAY); // make age uppercase?


//It is right to use the hard-coded uppercase const alias for the birthdate because that value will never change and we know the value before executing the code, however it is best not to use the uppercase for age because age is calculated. 