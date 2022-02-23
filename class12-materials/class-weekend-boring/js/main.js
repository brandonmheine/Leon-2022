document.querySelector('#check').addEventListener('click', check);
const output = document.querySelector('#placeToSee');

function check() {

  const day = document.querySelector('#day').value;

  if (day.toLowerCase() === 'tuesday' || day.toLowerCase() === 'thursday') {
    output.textContent = "It's class day!";
  }
  else if (day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday') {
    output.textContent = "It's the weekend!";
  }
  else {
    output.textContent = "Meh it's a regular day";
  }

}
