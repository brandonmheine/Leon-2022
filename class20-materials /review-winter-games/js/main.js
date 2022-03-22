//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenChecker(array) {
    const evens = []
    const odds = []
    array.forEach(a => a % 2 === 0 ? evens.push(a) : odds.push(a))
    return evens
}


console.log(evenChecker([1, 2, 3, 4, 5]))