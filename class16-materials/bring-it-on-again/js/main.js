// *Variables*
// Declare a variable, assign it a value, and alert the value
let variable = 17;
alert(variable);

// Create a variable, divide it by 10, and console log the value
let otherVariable = 70;
otherVariable /= 10;
console.log(otherVariable);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThree(a, b, c) {
    const product = a * b * c;
    alert(product);
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addSubtract(a, b, c, d) {
    console.log(a + b - c - d);
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function hundred(a, b, c) {
    const result = (100 + a - b) / c;
    if (result > 25) {
        console.log("WE HAVE A WINNNA");
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayChecker(day) {
    const lowerDay = day.toLowerCase();
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    if (!days.includes(lowerDay)) {
        alert("Try again");
        return
    }
    else if (lowerDay === days[5] || lowerDay === days[6]) {
        alert("weekend");
    }
    else {
        alert("week day");
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function looper(number) {
    for (let i = 1; i <= number; i += 3) {
        console.log(i);
    }
}
