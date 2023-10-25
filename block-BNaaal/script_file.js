let http = require('http')
// http.createServer((req,res)=>{
//     console.log(req,res)
//     res.end('welcome')

// }).listen(4000,"localhost")

let server = http.createServer(handleRequest)

function handleRequest(req,res){
    // handle Request
    res.end("welcome")
}

server.listen(4000,()=>{
    console.log("server is lisning on port 4000");
})

