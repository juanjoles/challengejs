const db = require ("../models");
const user = db.user;
const Op = db.Sequelize.Op;
const session = require('express-session');

exports.create = (req,res) => {
    
    const users = {
        email:req.body.email,
        password:req.body.password
    };
    
    user.create(users)
        .then(data =>{
            //res.send(data);
            res.render('login',{
                alert: true,
                alertTitle: "Registration",
                alertMessage: "Registracion Exitosa",
                alertIcon:'success',     
                ruta: ''  
                })
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "error"
            });
        });
};

exports.select =  (req,res) => {

    const email = req.body.email;
    const password = req.body.password;
    const condicion =   { email: `${email}`} ;
    const condicion1 = {password:`${password}`}
    if(email && password){
    user.findAll({
        where: {
            [Op.and]: [
                {email: `${email}`},
                {password:`${password}`}
            ]
        } 
    })
    .then(function(results){
        
        if(results.length == 0){
            
             res.render('login',{
                alert: true,
                alertTitle: "Error",
                alertMessage: "EMAIL y/o PASSWORD incorrectas",
                alertIcon:'error',     
                ruta: '/'    
             })           
        }else{
             
             req.session.loggedin = true;
             login: true,
              res.redirect("/home");
        }
    })
    
}else{
    res.render('login',{
        alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese email y contraseña",
                alertIcon:'warning',     
                ruta: '/'   
    })
}
    
}