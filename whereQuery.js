const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users_data"
})

dbConn.connect((err, result) => {
    if (err) throw err;
    console.log("DB connected");
    // to select the data which is related to the given name
    // const sql = `SELECT * FROM user WHERE name = 'Eliyas'`;

    //to select a particular line which lincludes a specific character
    // const sql = `SELECT * FROM user WHERE name LIKE 'y%'`;

    // //to avoid sql injection use escape value in queries
    // const name = 'Eliyas'
    // const sql = `SELECT * FROM user WHERE name = ` + mysql.escape(name);

    // place holders for values in the query
    const name = 'eli';
    const adr = 'chennai-78';
    const sql = `SELECT * FROM user WHERE name = ? or address = ?`
    dbConn.query(sql,[name, adr], (err, result) => {
        console.log(result);
    })
})