const { log } = require('console');
let http = require('http')
let url = require('url')
let server = http.createServer(handleRequest)


// 1. 
// function handleRequest(req,res) {
//   console.log(req,res);  
// }

// server.listen(5000,()=>{
//     console.log('server listening on port 5000');
// })

// 2.  
// function handleRequest(req,res) {
//  res.end('My first server in NodqeJS') 
// }

// server.listen(5100,()=>{
//     console.log('server listening on port 5100');
// })

// 3.
// function handleRequest(req,res) {
//     console.log(req.headers)
//     let userAgent = req.headers['user-agent']
// res.end(`${userAgent}`)
//    }
   
//    server.listen(5555,()=>{
//        console.log('server listening on port 5555');
//    })

// 4.
// function handleRequest(req,res) {
//    console.log(req.method,req.url)
//    let requestUrl = JSON.stringify(req.url)
//    let requestMethod = JSON.stringify(req.method)
//    res.write(`${requestUrl}`)
//    res.write(`${requestMethod}`)
//    res.end()
//    }

   
//    server.listen(5566,()=>{
//        console.log('server listening on port 5566');
//    })

// 4.
// function handleRequest(req,res) {
//    console.log(req.method,req.url)
//    res.write(`${JSON.stringify(req.headers)}`)
//    res.end()
//    }

   
//    server.listen(7000,()=>{
//        console.log('server listening on port 7000');
//    })

// 6.
// function handleRequest(req,res) {
//        res.statusCode = 202
//        res.write('welcome to altCampus')
//        res.end()
//     }
 
    
//     server.listen(3333,()=>{
//         console.log('server listening on port 3333');
//     })

// 7.
// function handleRequest(req,res) {
//        res.setHeader('Content-Type', 'text/html')
//        res.write(`<h3>Welcome to altcampus</h3>`)
//        res.end()
//     }
 
    
//     server.listen(8000,()=>{
//         console.log('server listening on port 8000');
//     })

// 8.
// function handleRequest(req,res) {
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write(`<h3>Welcome to altcampus</h3>`)
// res.end()
// }
// server.listen(8001,()=> console.log('server is listening on port 8001'))

// 9.
// function handleRequest(req,res) {
//     res.setHeader('Content-Type','application/json')
//     res.write(`{success: true, message: 'Welcome to Nodejs'}`)
// res.end()
// }
// server.listen(8888,()=> console.log('server is listening on port 8888'))

// 10.
// function handleRequest(req,res) {
//    console.log(req.method);
//    res.setHeader('Content-Type','text/html')
//     res.write(`<h2>posted for first time</h2>`)
// res.end()
// }
// server.listen(5050,()=> console.log('server is listening on port 5050'))

// 11.
// function handleRequest(req,res) {
//    console.log(req.url,req.method);
//    if(req.method== "GET" && req.url == '/'){
//     res.setHeader('Content-Type','plain/text')
//     res.end('Shivam Rajpoot')
//    }else if(req.method == "GET" && req.url == '/about'){
//     res.setHeader('Content-Type','text/html')
//     res.end('<h2>Shivam Rajpoot nauranga</h2>')
//    }else{
//         res.writeHead(404,{'Content-Type':'text/html'})
//     res.write(`<h3>page not found</h3>`)
// res.end()
//    }
// }
// server.listen(2345,()=> console.log('server is listening on port 2345'))

// 12.
// function handleRequest(req,res) {
//    console.log(req.url,req.method);
//    if(req.method== "GET" && req.url == '/users'){
//     res.setHeader('Content-Type','text/html')
//         res.write(`  <form action="">
//         <input type="text" name="email" placeholder="Your email" required>
//     </form>`)
//     res.end()
//    }else if(req.method == "POST" && req.url == '/users'){
//     res.end('Posted for the second time')
//    }else{
//         res.writeHead(404,{'Content-Type':'text/html'})
//     res.write(`<h3>page not found</h3>`)
// res.end()
//    }
// }
// server.listen(2355,()=> console.log('server is listening on port 2355'))

// 13.
// function handleRequest(req,res) {
//     let parsedUrl = url.parse(req.url)
//     let pathName = parsedUrl.path
//     let email = parsedUrl.query
//        if(req.method==='GET' && pathName==='/users?email=nodeserver@gmail.com'){
//             res.write(`${email}`)
//         res.end()
//         }else{
//             res.end(`Page not found ${res.statusCode=404}`)
//         }
// }
// server.listen(4444,()=> console.log('server is listening on port 4444'))