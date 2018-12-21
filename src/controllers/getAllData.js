const dbConnection = require('../../db/db_connection')

const getAllData = cb => {
    dbConnection.query(`SELECT * FROM tech`, (err, res) => {
        if (err){
            cb(err);
        } else {
            cb(null, res);
        }
    })
}


module.exports = getAllData;