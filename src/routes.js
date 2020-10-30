const express = require('express');

const routes = express.Router();

const mysql = require('mysql');

var ret = [];

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'db_apr'
});

connection.query('Select * From users', function (err, rows, fields) {
    if (!err){
        var string=JSON.stringify(rows);
        console.log(string);
        var json =  JSON.parse(string);
       // to get one value here is the option
       ret = json;

    }
    else
        console.log('Erro ao consultar o banco de dado');
})


//connection.destroy();

//app.put('/users', (req, res) => {
//res.send("Success");
//console.log(req.query);

//app.put('/users/:id', (req, res) => {
//console.log(req.params);

routes.post('/users', (req, res) => {
    console.log(req.body);

    res.json({ message: 'status: 200', names: ret });
})


module.exports = routes;