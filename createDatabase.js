const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})

dbConn.connect( async (err, result) => {
    if(err) throw err;
    console.log("DB connected");
    try {
        await dbConn.query('CREATE DATABASE users_data');
        console.log("DB connected successfully");
    } catch(e) {
        console.log(e);
    }
})