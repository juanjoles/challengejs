const express = require('express');

const app = express();


//Creation of Data Base

const db = require ("./app/models");
const {user} = require('./app/models');
db.sequelize.sync();


app.get('/', (req, res) => {
    res.send('Hola mundo');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port`,PORT);
});