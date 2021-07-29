const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const methodOveride = require('method-override');
const session = require('express-session');


const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(methodOveride('_method'));

//motor de plantillas
app.set('view engine', 'ejs');

app.set('views', __dirname + "/app/views");

app.use(express.static(__dirname + "/app/public"));

//Creation of Data Base
require('dotenv').config()
const db = require ("./app/models");
const {user} = require('./app/models');
db.sequelize.sync();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', require("./app/routes/users.routes"));
app.use('/home', require("./app/routes/operation.routes"));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port`,PORT);
});