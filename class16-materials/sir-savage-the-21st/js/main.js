//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

const say = document.querySelector('h2');

function twentyOne() {
    let output = ''
    for (let i = 0; i < 21; i++) {
        output += '21 '
    }
    return output
}

say.textContent = twentyOne();