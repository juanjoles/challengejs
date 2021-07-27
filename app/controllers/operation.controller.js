const { sequelize } = require("../models");
const db = require ("../models")
const Operation = db.operation;
const Op = db.Sequelize.Op;

//Cargar nueva operacion

exports.create = (req,res) => {
    const operation = {
        concept: req.body.concept,
        amount: req.body.amount,
        date: req.body.date,
        type: req.body.type
    };
    Operation.create(operation)
        .then(data =>{
             res.redirect("home");
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "error"
            });
        });
}

//Seleccionar registros

exports.select = (req,res) => {
    Operation.findAll({
        //limit: 10,
        order: [['createdAt', 'DESC']]
        
        
    })
        .then(data =>{
            res.render("home",{
                arrayoperation:data
                
            });
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Error select"
            });
        });
}