const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_registeration"
})

dbConn.connect( async (err, result) => {
    if (err) return console.log("Connection not established");
    console.log("DB connected");
    dbConn.query(`SELECT * FROM emloyee`, (err, result) => {
        if(err) throw err;
        console.log(result);
    })
})