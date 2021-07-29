module.exports = {
    HOST:"localhost",
    USER:process.env.POSTGRES_USER,
    PORT:process.env.POSTGRES_PORT,
    PASSWORD:process.env.POSTGRES_PASSWORD,
    DB:process.env.POSTGRES_DB,
    dialect:"postgres",

}