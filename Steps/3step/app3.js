let express=require('express');
let app=express();

app.listen(3000,function(){
    console.log('node express is working on port 3000');
});

app.get('/',function(request,response){
    response.render('index.html');
});
