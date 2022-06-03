const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname.slice(1) + '.html'
  const params = querystring.parse(url.parse(req.url).query)

  const write = () => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    res.end()
  }

  fs.readFile(page, function (err, data) {
    write()
  })

  if (page == 'api') {
    if ('student' in params) {
      if (params['student'] == 'leon') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        const objToJson = {
          name: 'leon',
          status: 'Boss Man',
          currentOccupation: 'Baller',
        }
        res.end(JSON.stringify(objToJson))
      } else if (params['student'] != 'leon') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        const objToJson = {
          name: 'unknown',
          status: 'unknown',
          currentOccupation: 'unknown',
        }
        res.end(JSON.stringify(objToJson))
      }
    }
  } else if (page == 'css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data)
      res.end()
    })
  } else if (page == 'js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      write()
    })
  } else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...')
        console.dir(err)
        return
      }
      res.write(data)
      res.end()
    })
  }
})

server.listen(8000)
