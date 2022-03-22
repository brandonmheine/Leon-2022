// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood
favoriteFood = 'Rice'
alert(favoriteFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let string
string = 'Bob'
alert(string[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideAndMult(a, b, c) {
    return a / b * c
}
alert(divideAndMult(2, 3, 5))

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(number) {
    return Math.cbrt(number)
}
cubeRoot(7)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function isSummer(month) {
    const summerMonths = ['june', 'july', 'august']
    if (summerMonths.includes(month.lower)) {
        alert('YAY')
    }
    alert('Booo')
}


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function noFives(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 5 !== 0) {
            console.log(i)
        }
    }
}
