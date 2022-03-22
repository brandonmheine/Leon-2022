// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function firstOrLast(array) {
    return array[0] < array[-1] ? alert('Hi') : array[0] > array[-1] ? alert('Bye') : alert('We close in an hour')
}


firstOrLast([1, 2, 3, 4, 5, 1])