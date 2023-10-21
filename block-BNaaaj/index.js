console.log("Welcome to Node.js");


// let os = require('os');
// const { buffer } = require('stream/consumers');
// let cpuLength = os.cpus().length
// let freemem =  os. freemem()
// let uptime = os.uptime()
// let version = os.version()


// console.log(cpuLength,freemem,uptime,version);





// Q. Write 2 different methods for creating buffer in nodejs using Buffer class.
// create a fixed length buffer of 12.
// write code to convert buffer back to string.

// buff1 = Buffer.alloc(12)
// buff1.write('Welcome to Node.js')
// console.log(buff1.toString())


// buff2 = Buffer.allocUnsafe(12)
// buff2.write('Welcome to Node.js')
// console.log(buff2.toString())

// write code to require only readFile and unlink method from fs module.
let { readFile, readFileSync, unlink } = require('fs')

// Write code example to demonstrate blocking and non-blocking code.

// blocking

readFile('./index.md',(err,content)=>{
  console.log(err,content)
})

// console.log('excute me first');

// console.time("Time this");
// for (let i = 0; i < 1000000000; i++) {
  // Your stuff here
// }
// console.timeEnd("Time this");

// console.log('excute me last');

// non-blocking

let  sync = readFileSync('./index.md','utf8')
console.log(sync)

// console.log('excute me first');

// console.time("Time this");
// setTimeout(()=>{
// console.log('timeOut execute')
// console.timeEnd("Time this");
// },1000)

// console.log('excute me last');


