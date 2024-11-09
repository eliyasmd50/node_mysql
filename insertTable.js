const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "users_data"
})

dbConn.connect(async (err) => {
    if(err) throw err;
    console.log("DB connected");
    try {
        //to insert single record
        const sql = `INSERT INTO user (name, address) VALUES ('Eliyas', 'Aspire')`;

        dbConn.query(sql, (err, result) => {
            console.log("Db inserted Successfully and the id is :" + result.insertId);
        });
        
        //to insert multiple records
        // const sql = `INSERT INTO user (name, address) VALUES ?`
        // const values = [
        //     ['mohamed', 'chennai-78'],
        //     ['moham', 'chennai-78'],
        //     ['hamed', 'chennai-78'],
        //     ['momed', 'chennai-78'],
        //     ['mohad', 'chennai-78'],
        //     ['momed', 'chennai-78'],
        //     ['mohad', 'chennai-78'],
        //     ['mmed', 'chennai-78'],

        // ]
        // dbConn.query(sql, [values], (err, result) => {
        //     console.log(result.affectedRows);
        // })

        
    } catch (e) {
        console.log(e);
    }
})