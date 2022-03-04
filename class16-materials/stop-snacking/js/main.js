//Create a function that grabs the number of snacks from the input and tells you to stop that many times

const input = document.querySelector('input');
const clicker = document.querySelector('#help');
clicker.addEventListener('click', stops);

const output = document.querySelector('#stops');


function stops() {
    outputText = '';
    for (let i = 0; i < input.value; i++) {
        outputText += 'STOP ';
    }
    console.log(outputText);
    output.textContent = outputText;
}