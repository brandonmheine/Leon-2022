//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numberArray = [1, 2, 3, 4, 5, 6, 7]
alert(numberArray.reduce((a, b) => a + b, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareAllNumbers(array) {
    return array.map(number => number ** 2)
}

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(string) {
    return string.split('').reverse().join('')
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(string) {
    const reversed = reverseString(string)
    return string === reversed
}

console.log(palindrome('racecar'))
