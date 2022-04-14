//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

const namePlace = document.querySelector('#name')
const instructionsPlace = document.querySelector('#instructions')
const imagePlace = document.querySelector('img') 
imagePlace.setAttribute('height', '300px')
const ingredientAndAmountPlace = document.querySelector('#ingredients-amounts')

const getCocktail = async function() {
    let searchWord = document.querySelector('input').value
    if (searchWord.includes(' ')) {
        searchWord = searchWord.replaceAll(' ', '_')
        console.log(searchWord)
    }
    console.log(searchWord)
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchWord}`)
    const resJSON = await response.json()
    const drinks = resJSON.drinks
    // console.log(drinks);

    const randomIndex = getRandomIndex(drinks)
    let index = 0
    const drink = drinks[index]
    const ingredients = getIngredients(drink)
    const amounts = getAmounts(drink)
    displayIngredientsAndAmounts(ingredients, amounts)
    setProperties(drink.strDrink, drink.strInstructions, drink.strDrinkThumb)

    setInterval(() => {
        index++
        if (index === drinks.length) {
            index = 0
        }
        const randomIndex = getRandomIndex(drinks)
        const drink = drinks[index]
        const ingredients = getIngredients(drink)
        const amounts = getAmounts(drink)
        displayIngredientsAndAmounts(ingredients, amounts)
        setProperties(drink.strDrink, drink.strInstructions, drink.strDrinkThumb)
    }, 5000)
    // const randomIndex = getRandomIndex(drinks)
    // const drink = drinks[randomIndex]
    // const ingredients = getIngredients(drink)
    // const amounts = getAmounts(drink)
    // displayIngredientsAndAmounts(ingredients, amounts)
    // setProperties(drink.strDrink, drink.strInstructions, drink.strDrinkThumb)
}

function setProperties(name, instructions, image) {
    namePlace.textContent = `Drink name: ${name}`
    instructionsPlace.textContent = `Instructions: ${instructions}`
    imagePlace.src = image
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function getIngredients(drink) {
    const ingredients = Object.entries(drink)
    const filteredIngredients = ingredients.filter(a => a[0].includes('strIngredient') && a[1] !== null && a[1] !== '')
    // console.log(filteredIngredients)
    const ingredientsOnly = filteredIngredients.map(a => a[1])
    // console.log(ingredientsOnly);
    return ingredientsOnly
}

function getAmounts(drink) {
    const amounts = Object.entries(drink)
    // console.log(amounts);
    const filteredAmounts = amounts.filter(a => a[0].includes('strMeasure') && a[1] !== null && a[1] !== '')
    // console.log(filteredAmounts);
    const amountsOnly = filteredAmounts.map(a => a[1])
    // console.log(amountsOnly);
    return amountsOnly
}

function displayIngredientsAndAmounts(ingredients, amounts) {
    ingredientAndAmountPlace.innerHTML = ''
    for (let i = 0; i < ingredients.length; i++) {
        if (amounts[i] !== undefined) {
            let current = `${ingredients[i]}: ${amounts[i]}`
            let newDiv = document.createElement('div')
            newDiv.textContent = current
            ingredientAndAmountPlace.appendChild(newDiv)
        }
    }
}

// getCocktail()

const button = document.querySelector('button')
button.addEventListener('click', getCocktail)