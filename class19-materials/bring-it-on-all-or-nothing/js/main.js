// *Variables*
// Declare a variable, assign it a boolean, and alert the value
const bool = true
alert(bool)

// Declare a variable, reassign it to your favorite color, and console log the value
let color
color = 'blue'
console.log(color)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function first(a, b, c, d) {
    return (a + b + c) / d
}

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function second(a, b) {
    console.log(`${a ** b}`);
}
second(3, 4)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function third(bool, string) {
    if (bool) {
        alert(string)
    }
    else {
        console.log(string)
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        let output = i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i
        console.log(output);
    }
}

fizzBuzz(100)