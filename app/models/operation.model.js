module.exports =  (sequelize,Sequelize) => {
    const Operation = sequelize.define("operation",{
        concept:{
            type:Sequelize.STRING
        },
        amount:{
            type:Sequelize.INTEGER
        },
        date:{
            type:Sequelize.DATEONLY
        },
        type:{
            type:Sequelize.STRING
        }
    });
    return Operation;
}