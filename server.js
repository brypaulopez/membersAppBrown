var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    root: '3306',
    password: '',
    database: 'memberprofile'
});

var server = app.listen(1348, function() {
    var host = server.address().address
    var host = server.address().port
    console.log('start')
});

con.connect(function(error) {
    if(error) console.log(error);
    else console.log('Connected Successfully!');
});

app.get('/members', function(req, res){
    con.query('select * from memberinfo', function(error, rows, fields){
        if(error) console.log(error);

        else {
            console.log(rows);
            res.send(rows);
        }
    });
});