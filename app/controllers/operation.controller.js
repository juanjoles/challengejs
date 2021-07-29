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
             res.redirect("/home");
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

// Select with condition
exports.finAllType = (req,res) => {
    const type = req.query.type;
    let condicion = {type:{[Op.like]:`%${type}%`}};
    Operation.findAll({where:condicion,
        order: [['createdAt', 'DESC']]})
    .then(data =>{
        res.render("select",{
            arrayoperation:data
        });
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "ERROR SELECT TYPE"
        });
    })
}

//Delete registers
exports.delete = (req,res) =>{
    const id = req.params.id;
    Operation.destroy({
        where:{
            id:id
        }
        
    })
    
     res.redirect('/home');
}


//select one register
exports.findOneRegister = (req,res) =>{
    const id = req.params.id;
    let condicion = {id:`${id}`}
    Operation.findOne({where:condicion})
    .then(data =>{
        
        res.render("details",{
            
            arrayoperation:data
            
        });
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "ERROR SELECT ID"
        });
    })

}

//Update Registers

exports.update = async (req,res) =>{
    
    
    
    
    const id = req.params.id;
    const body = req.body;
    console.log(req.body)
     Operation.update(req.body, {
      where: {id:id}
    })
    
      .then(data => {
        res.redirect('/home')
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

  