const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
	savage: {
		age: 28,
		birthName: 'Some Dude',
		birthLocation: 'Some Place',
	},
	'chance the rapper': {
		age: 28,
		birthName: 'Chancellor',
		birthLocation: 'Some Place',
	},
	dylan: {
		age: 28,
		birthName: 'Dylan',
		birthLocation: 'The World',
	},
}

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (request, response) => {
	const rapName = request.params.rapperName.toLowerCase()
	console.log(rapName)
	if (!rappers[rapName]) {
		response.json(rappers['dylan'])
	}
	response.json(rappers[rapName])
})

app.get('/headstails', (request, response) => {
	const items = ['Heads', 'Tails']
	const item = items[Math.floor(Math.random() * items.length)]
	response.send(item)
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
