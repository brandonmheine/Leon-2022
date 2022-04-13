document.querySelector('button').addEventListener('click', getFetch)
const soundPlace = document.querySelector('video')

async function getFetch() {
  const bird = document.querySelector('input').value
  const response = await fetch(`https://xeno-canto.org/api/2/recordings?query=${bird}+q:A`)
  const json = await response.json()
  console.log(json)

  const songs = []

  for (let i = 0; i < json.recordings.length; i++) {
    const length = json.recordings[i].length.split(':')
    if (json.recordings[i].type === 'song' && Number(length[0]) < 1) {
      songs.push(json.recordings[i])
    }
  }

  // console.log(songs)
  const randomSong = getRandomIndex(songs)
  console.log(songs.length, randomSong, songs[randomSong], songs[randomSong].length)


  soundPlace.src = songs[randomSong].file

}



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}