document.querySelector('button').addEventListener('click', getRapName)
const result = document.querySelector('h2')

async function getRapName() {
	const rapName = document.querySelector('input').value
	try {
		const res = await fetch(`http://localhost:8000/api/rappers/${rapName}`)
		const data = await res.json()
		console.log(data.birthLocation)
		result.textContent = `Result: ${data.birthLocation}`
	} catch (err) {
		console.log(err)
	}
}

async function getHeadsOrTails() {
	try {
		const res = await fetch('http://localhost:8000/headstails')
		const data = await res.text()
		// console.log(data)
		result.textContent = `Result: ${data}`
	} catch (err) {
		console.log(err)
	}
}
