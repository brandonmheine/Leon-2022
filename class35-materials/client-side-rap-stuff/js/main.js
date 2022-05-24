document.querySelector('button').addEventListener('click', getRapName)

async function getRapName() {
	try {
		const res = await fetch('http://localhost:8000/headstails')
		const data = await res.text()
		console.log(data)
	} catch (err) {
		console.log(err)
	}
}
