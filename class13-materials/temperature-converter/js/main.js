var json = []
fetch('js/elements.json').then(response => json = response.json())

const celsiusTemp = document.querySelector('#cTemp');
const submit = document.querySelector('button');
const body = document.querySelector('body');
submit.addEventListener('click', calc);

function calc () {
    let celsius = celsiusTemp.value;
    celsius = celsius * 1.8 + 32;
    const answer = document.createElement('h1');
    answer.textContent = celsius;
    body.appendChild(answer);
}


// console.log(answer);

// body.appendChild(answer);