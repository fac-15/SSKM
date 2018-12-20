const tape = require("tape");
const dbBuild = require("../db/db_build.js");

const dbConnection = require('../db/db_connection.js');

const getData = cb => {
  dbConnection.query(`SELECT * FROM tech`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};


tape("test getData function to get a name of tech", t => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    getData(function(err, res) {
      if (err) return console.log("ERROR IN GETDATA: " + err);
      t.equals(
        res[0].name,
        "Tape",
        "Name of first tech should be Tape"
      );
      t.end();
    });
  });
});

tape("test getData function to get description of tech", t => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    getData(function(err, res) {
      if (err) return console.log("ERROR IN GETDATA: " + err);
      t.equals(
        res[1].description,
        "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.",
        "Description of second tech should be 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.'"
      );
      t.end();
    });
  });
});