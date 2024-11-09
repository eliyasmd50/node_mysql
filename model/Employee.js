const dbConn = require('../config/dbConn');

const createEmployeeTable = async () => {
    try {
        const dbExists = await dbConn.query(`SHOW TABLES LIKE 'employee'`)
        if (!dbExists) {
            await dbConn.query(`
            CREATE TABLE IF NOT EXIST employee (
                id INT AUTO_INCREMENT PRIMARY KEY,
                firstname VARCHAR(255) NOT NULL,
                lastname VARCHAR(255) NULL,
                age INT(20) NULL,
                destination VARCHAR(255) NULL
            )
        `)
            console.log("Table created in database")
        }
        else {
            console.log("Table already exist in database")
        }
    } catch (err) {
        return console.log("DB connection not established");
    }
}

module.exports = createEmployeeTable;