import http from "node:http"

function request(){
    http
        .request(
            {
                host:'localhost',
                port:3000,
                pathname:'/',
            },
            (res) => {
                let buffer = []
                res.on('data', (chunk) =>{
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

setTimeout(()=>{
    request()
}, 1000)