// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const variable = 'This is a string?'

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
const software = 'This is astring, I am a jr.dev'
software.replace('jr. dev', 'software engineer')
console.log(software)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function random() {
    const output = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * 3)
    return output[randomIndex]
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function RPS(choice) {
    if (choice === 'rock') {
        
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
