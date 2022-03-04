//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

const checker = document.querySelector('h1');
checker.addEventListener('click', ageChecker);

const input = document.querySelector('input');
const output = document.querySelector('p');

function ageChecker() {
    const age = input.value
    if (age < 16) {
        output.textContent = ("You can't drive");
    }
    else if (age < 18) {
        output.textContent =  ("You can't even get in the club, stop hatin");
    }
    else if (age < 21) {
        output.textContent =  ("You can't drink");
    }
    else if (age < 25) {
        output.textContent =  ("You can't rent a car affordably");
    }
    else if (age < 30) {
        output.textContent =  ("You can't rent fancy cars affordably");
    }
    else {
        output.textContent =  ("Life is over")
    }
}


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph