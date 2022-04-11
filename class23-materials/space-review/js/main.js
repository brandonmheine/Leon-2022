//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbers = [1, 2, 3, 44, 5]
alert(numbers.reduce((a, b) => a + b))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squaresArray(array) {
    return array.map(x => x ** 2)
}
console.log(squaresArray(numbers))

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(string) {
    return string.split('').reverse().join('')
}
console.log(reverseString('POOOPPOPOPAOSSJBDJKADBA'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(string) {
    return string === reverseString(string)
}
console.log(isPalindrome('racecar'))


console.log(numbers)