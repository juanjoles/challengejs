const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();


//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + "/app/views");

app.use(express.static(__dirname + "/app/public"));

//Creation of Data Base

const db = require ("./app/models");
const {user} = require('./app/models');
db.sequelize.sync();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/operation', require("./app/routes/operation.routes"));
// app.get('/home', (req, res) => {
//     res.send('Hola mundoaaaaaaaaaaaaa');
// });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port`,PORT);
});