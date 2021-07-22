const dbConfig = require ('../config/db.config.js')

const Sequelize = require ('sequelize')
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.operation = require("./operation.model.js")(sequelize,Sequelize);
db.user = require("./users.model.js")(sequelize,Sequelize);
module.exports = db;