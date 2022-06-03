const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')

class User {
  constructor(
    name = 'unknown',
    status = 'unknown',
    currentOccupation = 'unknown'
  ) {
    this.name = name
    this.status = status
    this.currentOccupation = currentOccupation
  }
}

const map = {
  '/': 'html',
  '/otherpage': 'html',
  '/otherotherpage': 'html',
  '/css/style.css': 'css',
  '/js/main.js': 'javascript',
  '/api': 'yo',
}

const write = (res, page, contentType, object = false) => {
  const pageToRender = page.slice(1)
  fs.readFile(
    pageToRender == ''
      ? 'index.html'
      : contentType == 'html'
      ? pageToRender + '.html'
      : pageToRender,
    (err, data) => {
      res.writeHead(200, { 'Content-Type': `text/${contentType}` })
      if (data) res.write(data)
      object ? res.end(JSON.stringify(object)) : res.end()
    }
  )
}

http
  .createServer((req, res) => {
    const page = url.parse(req.url).pathname
    const params = querystring.parse(url.parse(req.url).query)

    if (!Object.keys(map).includes(page)) {
      figlet('404!!', (err, data) => {
        if (err) {
          console.log('Something went wrong...')
          console.dir(err)
          return
        }
        res.write(data)
        res.end()
      })
    }

    if (page == '/api') {
      if ('student' in params) {
        const student =
          params['student'] == 'leon'
            ? new User('Leon', 'Baller', 'Twitch Streamer')
            : new User()
        write(res, page, 'application/json', student)
      }
    }

    write(res, page, map[page])
  })
  .listen(8000)
