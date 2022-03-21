//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function makeArray(number){
    const output = []
    for (let i = 1; i <= number; i++) {
        output.push(i)
    }
    return output
}