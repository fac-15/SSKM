const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const helpers = require("./views/helpers/index");
const controllers = require('./controllers/index')

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

app.get("/tech-info", (req, response) => {
  controllers.getTech('Tape', (err, res) => {
    if (err) console.log(err);
    response.render("tech-info", {
      techs: res
    });
  });
});

app.get("/add-tech", (req, res) => {
  res.render("add-tech", {});
});



module.exports = app;
