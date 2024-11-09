const mysql = require("mysql");

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users_data"
})

dbConn.connect((err) => {
    if(err) throw err;
    console.log("Db connected");
    const sql = `DELETE FROM user WHERE name = mmed`;
    dbConn.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log( result);
    })
})

dbConn.end((err) => {
    if (err) throw err;
    console.log("DB disconnected");
})