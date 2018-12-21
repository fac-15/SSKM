const dbConnection = require('../../db/db_connection')

const deleteTech = (techName, cb) => {
    dbConnection.query(`DELETE * FROM tech WHERE tech.name = '${techName}'`, (err, res) => {
        if (err){
            cb(err);
        } else {
            cb(null, res.rows);
        }
    })
}


module.exports = deleteTech;