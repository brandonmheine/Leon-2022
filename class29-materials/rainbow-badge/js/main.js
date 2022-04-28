//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getPokemon);

// function getFetch(){
//   const poke1 = document.querySelector('#poke1').value
//   const poke2 = document.querySelector('#poke2').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
//   const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
//   let pokeStore = []
//   pokeImg = []

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         pokeStore.push(data.types[0].type.name)
//         pokeImg.push(data.sprites.front_shiny)

//         fetch(url2)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {

//           pokeStore.push(data.types[0].type.name)
//           pokeImg.push(data.sprites.front_shiny)
//           // console.log(pokeStore, pokeImg)

//           if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
//             document.querySelector('#pokeImg1').src = pokeImg[0]
//             document.querySelector('#pokeImg2').src = pokeImg[1]
//             document.querySelector('h2').innerText = " 2x > "
//           }
//           return pokeImg
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });

//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });

// }

async function getPokemon() {
	const poke1 = document.querySelector("#poke1").value;
	const poke2 = document.querySelector("#poke2").value;
	const url = "https://pokeapi.co/api/v2/pokemon/" + poke1;
	const url2 = "https://pokeapi.co/api/v2/pokemon/" + poke2;
	let pokeStore = [];
	let pokeImg = [];

	const data1 = await fetch(url);
	const data1Json = await data1.json();
	const data2 = await fetch(url2);
	const data2Json = await data2.json();
	console.log(data1Json, data2Json);

	pokeStore.push(data1Json.types[0].type.name);
	pokeImg.push(data1Json.sprites.front_shiny);
	pokeStore.push(data2Json.types[0].type.name);
	pokeImg.push(data2Json.sprites.front_shiny);

	if (pokeStore[0] === "grass" && pokeStore[1] === "water") {
		document.querySelector("#pokeImg1").src = pokeImg[0];
		document.querySelector("#pokeImg2").src = pokeImg[1];
		document.querySelector("h2").innerText = " 2x > ";
	}

	console.log(pokeImg[0]);
}
