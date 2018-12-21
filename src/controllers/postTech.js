const dbConnection = require("../../db/db_connection");

const postTech = (name, description, language, author, rating, cb) => {
  dbConnection.query(
    `INSERT INTO tech (name,description,language,author,rating) VALUES ($1,$2,$3,$4,$5)`,
    [name, description, language, author, rating],
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = postTech;


