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

app.listen(port,function(){
    console.log(`node express is working on port %s`,port);
});

app.get('/',function(request,response){
    con.query(
        'SELECT * FROM customer_table',
        function(err,result){
        if (err) throw err;
        console.log(result);
        let names={};
        for(let i=0; i<result.length;i++){
            names[result[i]['id']]=result[i];
        };
        console.log(names);
        response.render('main',{nms:names});
        });
});

