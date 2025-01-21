//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

document.querySelector('#getCocktail').addEventListener('click', getDrink)

function getDrink() {
    const drink = document.querySelector('input').value;


    //try to get it to work with drinks that have spaces in their names (not using template literal)
    //ALSO try to get the NASA API to work
    //push homework, make it cycle through the drinks
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.drinks[0]);
        // console.log(data.drinks[0].strDrinkThumb)
        document.querySelector('img').src = data.drinks[0].strDrinkThumb;
        document.querySelector('h2').innerText = data.drinks[0].strDrink;
        document.querySelector('p').innerText = data.drinks[0].strInstructions;

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}




