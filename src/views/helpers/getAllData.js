const dbConnection = require('../../../db/db_connection.js');

const getAllData = () => {
    return new Promise((resolve, reject) => {
        dbConnection.query(`SELECT * FROM tech`),
        (err,res) => {
            if (err) return reject(err);
            resolve(res)
        }
    })
    .then(res => resolve(res))
    .catch(err => reject(err))
  };

module.exports = getAllData;