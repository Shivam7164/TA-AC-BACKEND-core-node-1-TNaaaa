let http = require('http')
 
let server = http.createServer(handleRequest)

function handleRequest(req,res) {
    console.log(req.method,req.url);
    if(req.method == 'GET' && req.url == '/'){
        res.end('Welcome to homepage')
    }else if(req.method == 'GET' && req.url == '/about'){
        res.setHeader('Content-Type','text/html')
        res.write('<h2>this is all about NodeJS</h2>')
       res.end()
    }else if(req.method == 'POST' && req.url == '/about'){
        res.setHeader('Content-Type','application/json')
        res.end('{message: this is a post request}')
    }else{
        res.statusCode = 404
        // res.writeHead(5000, {'Content-Type':'text/html'})
        res.end('page not found')
    }
}

server.listen(5000,()=>{
    console.log('server listening on port 5000');
})