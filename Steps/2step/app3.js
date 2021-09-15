const http=require('http');
const { type } = require('os');
http.createServer(function(request,response){
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers['user-agent']);
    response.setHeader('Content-Type','');
    if(request.url == '/'){
        response.end("<h1>Main page</h1> <br> <b>Hello</b>");
    }
    else if(request.url == '/category'){
        response.end("category page");
    }
    else if(request.url == '/contacts'){
        response.end("contacts page");
    }
}).listen(3000);