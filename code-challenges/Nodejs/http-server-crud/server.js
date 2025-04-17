import http from 'node:http';


const server = http.createServer((req,res)=>{
    res.writeHead(200, "OK", {
        'content-type': "application/json"
    })
    console.log(JSON.stringify("Hello World!"))
    res.end(JSON.stringify("Hello world!"))
})


server.listen(3000,()=>{
    console.log("Listening on port", 3000)
})