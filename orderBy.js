const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users_data"
});

dbConn.connect((err, result) => {
    if(err) throw err;
    console.log("DB connected");

    //to sort the result in an ascending order
    // const sql = `SELECT * FROM user ORDER BY name`;

    //to sort the result in the descending order
    const sql = `SELECT * FROM user ORDER BY name DESC`;
    
    dbConn.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
    })
})