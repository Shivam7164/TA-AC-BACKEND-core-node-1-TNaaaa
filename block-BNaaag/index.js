console.log('welcome to node.js');

let fs = require('fs')

let fs1 = fs.readFile('content.md',(err,content)=>{
    if(err) {
      console.log(err);  
    }else{
        console.log(content.toString())
    }
})


let sync = fs.readFileSync('content.md','utf8')
console.log(sync)


let buff1 = Buffer.alloc(10)
buff1.write("Welcome to Buffer")
console.log(buff1.toString())