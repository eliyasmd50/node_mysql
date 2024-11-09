const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users_data"
})

dbConn.connect((err, result) => {
    if (err) throw err;
    console.log("Db connected");

    //to take all the records from the table
    // const sql = `SELECT * FROM user`;

    //to take out particular columns
    const sql = `SELECT name FROM user`;
    dbConn.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(fields);
    })
})