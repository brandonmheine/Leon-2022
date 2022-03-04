//--- Easy
//create a variable and assign it a number
let number = 1;

//minus 10 from that number
number -= 10;

//print that number to the console
console.log(number);

//--- Medium
//create a variable that holds a value from the input
const input = document.querySelector('input');

//add 25 to that number
// inputValue += 25;

//alert that number
// alert(inputValue);

//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', sum)

function sum() {
    let inputValue = input.value;
    console.log(number + Number(inputValue));
}
