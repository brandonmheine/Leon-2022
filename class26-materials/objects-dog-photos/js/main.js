//Get a dog photo from the dog.ceo api and place the photo in the DOM

const imagePlace = document.querySelector('img')

async function getDogPhoto() {
  const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
  const responseJSON = await response.json()
  imagePlace.src = responseJSON.message
}

getDogPhoto()