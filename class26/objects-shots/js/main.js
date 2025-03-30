//HOMEWORK:

// 1 - push homework, make it cycle through the drinks (all gin drinks, all whiskey drinks, etc. after search)
// 2 - try to get it to work with drinks that have spaces in their names (not using template literal)
// 3 - use NASA API picture of the day - get a photo back
// 4 - build 3 simple apps using 3 APIs



//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

document.querySelector('#getCocktail').addEventListener('click', getCocktail);
//Buttons to create carousel of drinks
document.querySelector('#nextCocktail').addEventListener('click', nextCocktail);
document.querySelector('#previousCocktail').addEventListener('click', previousCocktail);

//Query Selectors for buttons to change instructions from English to Spanish and vice versa
document.querySelector('#english').addEventListener('click', langToEnglish);
document.querySelector('#espanol').addEventListener('click', langToEspanol);

//Created a counter to use in place of the element number in data.drinks[0]
let counter = 0;

function getCocktail(){
    const drink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        //Name then Image
        document.querySelector('h2').innerText = data.drinks[counter].strDrink
        document.querySelector('img').src = data.drinks[counter].strDrinkThumb
        //Ingredients
        document.querySelector('#ingredient1').innerText = data.drinks[counter].strIngredient1
        document.querySelector('#ingredient2').innerText = data.drinks[counter].strIngredient2
        document.querySelector('#ingredient3').innerText = data.drinks[counter].strIngredient3
        document.querySelector('#ingredient4').innerText = data.drinks[counter].strIngredient4
        document.querySelector('#ingredient5').innerText = data.drinks[counter].strIngredient5
        document.querySelector('#ingredient6').innerText = data.drinks[counter].strIngredient6
        document.querySelector('#ingredient7').innerText = data.drinks[counter].strIngredient7
        document.querySelector('#ingredient8').innerText = data.drinks[counter].strIngredient8
        document.querySelector('#ingredient9').innerText = data.drinks[counter].strIngredient9
        document.querySelector('#ingredient10').innerText = data.drinks[counter].strIngredient10
        //Instructions
        document.querySelector('#instructions').innerText = data.drinks[counter].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


function nextCocktail(){
    const drink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        counter++ //add one to the counter each time the nextCocktail function is called

        let maxArrLength = data.drinks.length - 1; // the length of the arr of drinks -1 gets you the number of the last element in the array which we'll use as a stop point below to restart counter at 0 to create a loop
       
        if(counter > maxArrLength){
            counter = 0;
        }

        console.log(data.drinks[counter]);
        //Name then Image
        document.querySelector('h2').innerText = data.drinks[counter].strDrink
        document.querySelector('img').src = data.drinks[counter].strDrinkThumb
        //Ingredients
        document.querySelector('#ingredient1').innerText = data.drinks[counter].strIngredient1
        document.querySelector('#ingredient2').innerText = data.drinks[counter].strIngredient2
        document.querySelector('#ingredient3').innerText = data.drinks[counter].strIngredient3
        document.querySelector('#ingredient4').innerText = data.drinks[counter].strIngredient4
        document.querySelector('#ingredient5').innerText = data.drinks[counter].strIngredient5
        document.querySelector('#ingredient6').innerText = data.drinks[counter].strIngredient6
        document.querySelector('#ingredient7').innerText = data.drinks[counter].strIngredient7
        document.querySelector('#ingredient8').innerText = data.drinks[counter].strIngredient8
        document.querySelector('#ingredient9').innerText = data.drinks[counter].strIngredient9
        document.querySelector('#ingredient10').innerText = data.drinks[counter].strIngredient10
        //Instructions
        document.querySelector('#instructions').innerText = data.drinks[counter].strInstructions
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


function previousCocktail(){
    const drink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        counter-- //subtract one fom the counter each time the previousCocktail function is called

        let maxArrLength = data.drinks.length - 1; // the length of the arr of drinks -1 gets you the number of the last element in the array which we'll use as a reset point below if the counter goes below 0 to create a loop
       
        if(counter < 0){
            counter = maxArrLength;
        }

        console.log(data.drinks[counter]);
        //Name then Image
        document.querySelector('h2').innerText = data.drinks[counter].strDrink
        document.querySelector('img').src = data.drinks[counter].strDrinkThumb
        //Ingredients
        document.querySelector('#ingredient1').innerText = data.drinks[counter].strIngredient1
        document.querySelector('#ingredient2').innerText = data.drinks[counter].strIngredient2
        document.querySelector('#ingredient3').innerText = data.drinks[counter].strIngredient3
        document.querySelector('#ingredient4').innerText = data.drinks[counter].strIngredient4
        document.querySelector('#ingredient5').innerText = data.drinks[counter].strIngredient5
        document.querySelector('#ingredient6').innerText = data.drinks[counter].strIngredient6
        document.querySelector('#ingredient7').innerText = data.drinks[counter].strIngredient7
        document.querySelector('#ingredient8').innerText = data.drinks[counter].strIngredient8
        document.querySelector('#ingredient9').innerText = data.drinks[counter].strIngredient9
        document.querySelector('#ingredient10').innerText = data.drinks[counter].strIngredient10
        //Instructions
        document.querySelector('#instructions').innerText = data.drinks[counter].strInstructions
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


function langToEnglish(){
    const drink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data.drinks[counter])
        document.querySelector('#instructions').innerText = data.drinks[counter].strInstructions;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


function langToEspanol(){
    const drink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data.drinks[counter])
        if(data.drinks[counter].strInstructionsES !== null){
            document.querySelector('#instructions').innerText = data.drinks[counter].strInstructionsES;
        }
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}









































// document.querySelector('#getCocktail').addEventListener('click', getDrink)

// function getDrink() {
//     const drink = document.querySelector('input').value;

    
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         console.log(data.drinks[0]);
//         // console.log(data.drinks[0].strDrinkThumb)
//         document.querySelector('img').src = data.drinks[0].strDrinkThumb;
//         document.querySelector('h2').innerText = data.drinks[0].strDrink;
//         document.querySelector('p').innerText = data.drinks[0].strInstructions;

//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }




