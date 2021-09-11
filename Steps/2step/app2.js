const http=require('http');
http.createServer(function(request,response){
    console.log(request.url);
    if(request.url == '/'){
        response.end("main page");
    }
    else if(request.url == '/category'){
        response.end("category page");
    }
}).listen(3000);