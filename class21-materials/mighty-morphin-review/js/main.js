// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday
holiday = 'Christmas'
holiday = holiday.toUpperCase()
console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let string = 'ITSAWORDFOOL'
alert(`${string.slice(-3)}`)

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtractFiveFromHundred(a, b, c, d, e) {
    const output = Math.abs(100 - a - b - c - d - e)
    alert(output)
}
subtractFiveFromHundred(1, 2, 3, 7, 6)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function logLowestAndHighest(a, b, c) {
    const array = [a, b, c].sort((a, b) => a - b)
    console.log(array[0], array[2]);
}
logLowestAndHighest(5, 8, 1)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
    return Math.random() > 0.5 ? 'Heads' : 'Tails'
}
console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function repeatHeadsorTails(number) {
    for (let i = 0; i < number; i++) {
        console.log(headsOrTails());
    }
}
repeatHeadsorTails(10)