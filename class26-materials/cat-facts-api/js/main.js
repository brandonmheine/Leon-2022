document.querySelector('button').addEventListener('click', getFetch)
const list = document.querySelector('ul')

async function getFetch() {
  const response = await fetch('https://uselessfacts.jsph.pl/today.json')
  const json = await response.json()

  console.log(json)

  // for (let i = 0; i < json.length; i++) {
  //   let newItem = document.createElement('li')
  //   newItem.textContent = json[i].text
  //   list.appendChild(newItem)
  // }
}