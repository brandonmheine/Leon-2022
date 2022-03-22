//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

const namePlace = document.querySelector('#name')
const instructions = document.querySelector('#instructions')
const image = document.querySelector('img') 
image.setAttribute('height', '200px')

const getCocktail = async function() {
    const searchWord = document.querySelector('input').value
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchWord}`)
    // console.log(response);
    const resJSON = await response.json()
    // console.log(resJSON)
    const drinks = resJSON.drinks
    const random = Math.floor(Math.random()* drinks.length)
    const drink = drinks[random]
    // console.log(firstDrink.strDrink)
    namePlace.textContent = `Drink name: ${drink.strDrink}`
    instructions.textContent = `Instructions: ${drink.strInstructions}`
    image.src = drink.strDrinkThumb
}



// getCocktail()

const button = document.querySelector('button')
button.addEventListener('click', getCocktail)