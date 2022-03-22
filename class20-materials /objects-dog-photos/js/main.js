//Get a dog photo from the dog.ceo api and place the photo in the DOM

const dogPhoto = async function() {
    const promise = await fetch('https://dog.ceo/api/breeds/image/random')
    const photoJSON = await promise.json()
    const photo = photoJSON.message
    document.querySelector('img').src = photo
}

dogPhoto()