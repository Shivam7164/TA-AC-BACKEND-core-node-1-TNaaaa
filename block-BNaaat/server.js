let http = require('http')
let fs=require('fs')

let server = http.createServer(handleRequest);

function handleRequest(req,res){
 console.log(req.method,req.url);
 if(req.method =='GET' && req.url == '/file'){
    fs.readFile('node.html',(err,content)=>{
        res.setHeader('Content-Type','text/html')
    if(err)  console.log(err)
     res.end(content)
    })
 }else if(req.method =='GET' && req.url == '/stream'){
    res.setHeader('Content-Type','text/htmml')
    fs.createReadStream('./node.html').pipe(res)
 }else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.end('page not found')
 }
}

server.listen(5555,()=>{
    console.log('server listening on port 5555');
})