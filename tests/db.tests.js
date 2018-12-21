const tape = require("tape");
const dbBuild = require("../db/db_build.js");

const controllers = require("../src/controllers/index.js");

tape("test getAllData function to get a name of tech", t => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    controllers.getAllData((err, res) => {
      if (err) return console.log("ERROR IN GETDATA: " + err);
      t.equals(
        res.rows[0].name,
        "Tape",
        "Name of first tech should be Tape"
      );
      t.end();
    });
  });
});

tape("test getAllData function to get description of tech", t => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    controllers.getAllData((err, res) => {
      if (err) return console.log("ERROR IN GETDATA: " + err);
      t.equals(
        res.rows[1].description,
        "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.",
        "Description of second tech should be 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.'"
      );
      t.end();
    });
  });
});