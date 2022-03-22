//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiplyAndAlert(array) {
    alert(array.reduce((a, b) => a * b, 1))
}

multiplyAndAlert([1, 2, 3, 4, 5])