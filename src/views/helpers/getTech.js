const dbConnection = require('../../../db/db_connection.js');

const getTech = name => {
    console.log(name);
    return new Promise((resolve, reject) => {
        dbConnection.query(`SELECT * FROM tech WHERE tech.name = '${name}'`
        )
    })
    .then(res => resolve(res))
    .catch(err => reject(err))
  };

module.exports = getTech;