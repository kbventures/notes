import * as http from "node:http";



http.createServer((req,res)=>{
    res.writeHead(200)
    res.end('Hello world!')
})
.listen(3000)


