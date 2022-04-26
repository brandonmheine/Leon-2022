//Get a dog photo from the dog.ceo api and place the photo in the DOM

const imagePlace = document.querySelector('img')

async function getDisney() {
  const response = await fetch(`https://api.disneyapi.dev/characters`)
  const responseJSON = await response.json()
  const firstImage = responseJSON.data[0].imageUrl
  imagePlace.src = firstImage
}

getDisney()



// function getDisney() {
//   fetch(`https://api.disneyapi.dev/characters`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log(`error: ${err}`)
//   });
// }