const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users_data"
})

dbConn.connect(async (err, result) => {
    if (err) throw err;
    console.log("DB connected");
    try {
        // const sql = `CREATE TABLE user (name VARCHAR(255),address VARCHAR(255))`;// to create a table
        const sql = `ALTER TABLE user ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY`;// TO ALTER THE TABLE
        await dbConn.query(sql);
        console.log("Table created successfully");
    } catch (e) {
        console.log(e);
    }
})