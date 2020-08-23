const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connexion to the Database
const myConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin2020',
    database: 'crud'
});

myConnection.connect((err) => {
    if(!err){
        console.log('Conexion Success');
    }
    else {
        console.log('Conexion Failed \nError: ' + JSON.stringify(err));
    }
})

app.listen(3000, () => console.log('Express Running'));
