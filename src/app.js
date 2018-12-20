const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const helpers = require("./views/helpers/index");
const controllers = require('./controllers/index')

// require data from db
// const techdata = [
//   {
//     name: "Handlebars",
//     description: "It's great!",
//     language: "JavaScript",
//     rating: true,
//     author: "Susan"
//   },
//   {
//     name: "Express",
//     description: "It's awesome!",
//     language: "JavaScript",
//     rating: true,
//     author: "Michal"
//   }
// ];

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main",
    helpers: helpers
  })
);


app.get("/", (req, response) => {
 
  controllers.getAllData((err, res) => {
    if (err) {
        console.log(err)
    } else {
      response.render("home", {
        techs: res.rows
      });
    }
  })
});

app.get("/add-tech", (req, res) => {
  console.log("add-tech is working");
  res.render("add-tech", {});
});

app.get("/tech-info", (req, res) => {
  console.log("tech-infor is working");
  res.render("tech-info", {});
});

module.exports = app;
