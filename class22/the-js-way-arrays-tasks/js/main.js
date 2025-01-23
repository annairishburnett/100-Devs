//THE JS WAY
//CHAPTER 7 - ARRAYS
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter07.md


// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.





// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.


function musketeers(){
    let musketeers = ["Athos", "Porthos", "Aramis"];

    for(let i = 0; i < musketeers.length; i++){
        console.log(musketeers[i]);
    }

    musketeers.push("D'Artagnan");

    musketeers.forEach(musketeerName => console.log(musketeerName));

    musketeers.splice(2,1);

    for(let musketeer of musketeers){
        console.log(musketeer)
    }
}

musketeers();










// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];


function sumValues(arr){
    console.log(arr.reduce((acc,c) => acc + c, 0));
}

sumValues(values);//42










// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

const values1 = [3, 11, 7, 2, 9, 10];


function maxValue(arr){
    console.log(Math.max(...arr));
}

maxValue(values1);//11










// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".


let words = [];
let word = '';

while(true){
    word = prompt('Enter a word:');

    if(word.toLowerCase() === 'stop'){
        break;
    }

    words.push(word);
}

console.log('You entered the following words:');
for(let w of words){
    console.log(w);
}