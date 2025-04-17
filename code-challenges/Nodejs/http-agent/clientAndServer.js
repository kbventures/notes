// server.js
const http = require('http')

http
  .createServer((req, res) => {
    console.log("Raw headers", req.rawHeaders)
    res.writeHead(200)
    res.end('Hello World')
  })
  .listen(3000)

// client.js
// const http = require('http')

function request() {
  http
    .request(
      {
        host: 'localhost',
        port: 3000,
        pathname: '/',
        headers:{
            'connection':'close',
        }
      },
      (res) => {
        let buffer = []
        res.on('data', (chunk) => {
          buffer.push(chunk)
        })
        res.on('end', () => {
          console.log(buffer.toString())
        })
      }
    )
    .end()
}

request()

setTimeout(() => {
  request()
}, 1000)
