let express=require('express');
let app=express();
let con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Root',
    database:'test_schema'
});
con.connect(function(err){
if (err) throw err;
console.log("connected!!!");
});

app.use(express.static('public'));
app.set('views','views');
app.set('view engine','pug');

app.listen(3000,function(){
    console.log('node express is working on port 3000');
});

app.get('/',function(request,response){
    response.render('main');
});

