require('dotenv').config();
const express = require('express');
const app = express();
const dbConn = require('./config/dbConn')
const PORT = process.env.PORT || 4500;

//middleware
app.use(express.json());

//routes
app.use('/employee', require('./routes/api/employee'));

//server connectivity
dbConn.getConnection((err, result) => {
    if(err) return console.log("DB Connection not established!");
    console.log("My SQL Connection Established");
    app.listen(PORT, () => {
        console.log(`server running on the port ${PORT}`);
    })
})
