//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = ['Show1', 'Show2', 'Show3']
tvShows.forEach(show => console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const numbers = [1, 2, 3, 4, 5]
const evens = numbers.filter(number => number % 2 === 0)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumOfSecondLowestAndSecondHighest(array) {
    const sorted = array.sort((a, b) => a- b)
    alert(`${sorted[1] + sorted[sorted.length - 2]}`)
}

sumOfSecondLowestAndSecondHighest([1, 2, 3, 4, 5, 13, 9])