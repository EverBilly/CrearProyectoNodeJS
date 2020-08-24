const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const conexion = require('express-myconnection');

const app = express();

//Importing Routes
const customerRoutes = require('./routes/customers');
const { urlencoded } = require('body-parser');

//Settings
app.set('port', process.env.PORT || 3000);
//Motor de Plantillas Engine
app.set('view engine', 'ejs');
//Unir el directorio de las vistas con url del sistema
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(morgan('dev'));
app.use(conexion(mysql, {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'Admin2020',
    database: 'crud'
}, 'single'));
app.use(express.urlencoded({extended: false}));//Entiende lo que el formulario manda al servidor

//routes
app.use('/', customerRoutes); 

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Conexion Stablish Port: ', app.get('port'));
})