let http = require('http')

let server = http.createServer(handleRequest)

function handleRequest(req,res){
    console.log(req.headers);
    console.log(req.method,req.url);
  
 res.end('welcome to server')
}

server.listen(3000,()=>{
    console.log('server is listing on port 3000');
})
