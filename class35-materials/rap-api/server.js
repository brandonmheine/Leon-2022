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

app.get('/api/savage', (request, response) => {
	response.json(savage)
})

app.get('/headstails', (request, response) => {
	const items = ['heads', 'tails']
	const item = items[Math.floor(Math.random() * items.length)]
	console.log(item)
	response.send(item)
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
