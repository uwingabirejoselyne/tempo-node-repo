const http = require('http');
const server =http.createServer((req,res)=>{
    //res.write('This is my home page')
    //res.end();
    if(req.url ==='/'){
        res.end('Welcome to their Home page')
    }
    if(req.url ==='/about'){
        res.end('This is my short Story')
    }
    res.end(`<h1>oops</h1>
    <p>we can't seem to find a page </p>
    <a href='/'>back home</a> 
    `)
})
server.listen(5000)