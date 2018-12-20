const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const helpers = require("./views/helpers/index");
const controllers = require('./controllers/index');

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

// router.get("/technology/:name", (req, response) => {
//   console.log(name);
//   controllers.getTech(name, (err, res) => {
//     if (err) console.log(err);
//     response.render("technology", {
//       techs: res
//     });
//   });
// });


app.get('/technology/:name', ({ params: { name } }, response) => {
  controllers.getTech(name, (err, res) => {
    if (err) {
        console.log(err)
    } else {
      response.render("technology", {
        tech: res
      });
    }
  })
});


app.get("/add-tech", (req, res) => {
  res.render("add-tech", {});
});



module.exports = app;
