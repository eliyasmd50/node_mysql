const { createPool } = require('mysql');

const dbConn = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_registeration",
    connectionLimit: 10
})


module.exports = dbConn;