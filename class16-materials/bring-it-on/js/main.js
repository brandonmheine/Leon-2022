// *Variables*
// Create a variable and console log the value
let variable = 7;
console.log(variable);

// Create a variable, add 10 to it, and alert the value
let otherVariable = 11;
otherVariable += 10;
alert(otherVariable);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(a, b, c, d) {
    return a - b - c - d
};

// Create a function that divides one number by another and returns the remainder
function remainder(a, b) {
    return a % b
};

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a, b) {
    const sum = a + b;
    if (sum > 50) {
        alert("Jumanji");
    }
};

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a, b, c) {
    const product = a * b * c
    if (product % 3 === 0) {
        alert("ZEBRA");
    }
};

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function multilog(word, number) {
    for (let i = 0; i < number; i++) {
        console.log(word);
    }
};
