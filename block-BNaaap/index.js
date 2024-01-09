const { log } = require('console')
let http = require('http')

let server = http.createServer(handleRequest)

function handleRequest(req,res) {
    log(req.method);
    res.statusCode=201
    res.setHeader('Content-Type','text/html')
    res.end('<h1>hello world</h1>')
}

server.listen(4444,()=>{
    log('server listenig on port 4444');
})