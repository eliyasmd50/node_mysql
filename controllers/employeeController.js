const createEmployeeTable = require('../model/Employee');
const dbConn = require('../config/dbConn');

createEmployeeTable();

const getAllEmployees = async (req, res) => {
    try{
        await dbConn.query(`SELECT * FROM emloyee`, (err, result, fields) => {
            if(err) return res.sendStatus(204).json({"message": `No employees found`});
            res.json(result);
        })
    } catch(e) {
        return res.sendStatus(201).json("No data found");
    }
}

module.exports = { getAllEmployees };