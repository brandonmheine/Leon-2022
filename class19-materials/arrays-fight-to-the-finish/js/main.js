//Create an array of movie titles. Loop through the array and each element to the h2.
const h2 = document.querySelector('h2')
const movies = ['Movie1', 'Movie2', 'Movie3']
movies.forEach(movie => {
    let movieParagraph = document.createElement('p')
    movieParagraph.textContent = movie
    h2.appendChild(movieParagraph)
})

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [1, 2, 3, 4, 5]
numbers = numbers.map(number => number + 3)
console.log(numbers)

//Find the average of all the numbers from question three
const average = numbers.reduce((total, current) => total + current, 0) / numbers.length
console.log(average)