let express=require('express');
let app=express();
const port = 3000;

app.use(express.static('public'));
app.set('views','views');
app.set('view engine','pug');
let mysql = require('mysql2');

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

app.listen(port,function(){
    console.log(`node express is working on port %s`,port);
});

app.get('/',function(request,response){
    response.render('main');
});

